const axios = require('axios')
require('dotenv').config()
const { client } = require('./redisClient')

const getMovieURLBySearchValue = (value) => {
  const result = value ? `query=${value}&` : ''
  return `https://api.themoviedb.org/3/search/movie?${result}include_adult=false&language=en-US&page=1`;
}

const fetchMovieApiData = async (title) => {
  const apiResponse = await axios.get(
    getMovieURLBySearchValue(title),
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.MOVIE_TOKEN}`
      }
    }
  )

  return apiResponse.data
}

const cacheAndReturnData = async (req, res) => {
  const title = req.body
  let results
  try {
    const cacheResults = await client.get(title.value)

    if (cacheResults) {
      results = JSON.parse(cacheResults)
      res.send({
        fromCache: true,
        data: results,
      })
    } else {
      results = await fetchMovieApiData(title.value)
      if (results.length === 0) {
        throw "API returned an empty array";
      }

      await client.set(title.value, JSON.stringify(results), {
        EX: 180,
        NX: true,
      })
      res.send({
        fromCache: false,
        data: results,
      })
    }
  } catch (error) {
    res.status(404).send("Movie data unavailable")
  }
}

const fetchWeeklyTrendiMovieApiData = async (res) => {
  const apiResponse = await axios.get(
    process.env.MOVIE_URL,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.MOVIE_TOKEN}`
      }
    }
  )
  res.send(apiResponse.data)
}

module.exports = {
  fetchWeeklyTrendiMovieApiData,
  cacheAndReturnData
};
