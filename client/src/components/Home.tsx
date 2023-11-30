import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import MovieList from './MovieList'
import { client } from '../client'
import { Button, Space } from 'antd'
import { Text } from '@chakra-ui/react'
import noSignal from '../asstest/no_signal.jpg'
import * as Styled from '../styles'

export type Movie = {
  id: string
  title: string
  overview: string
  vote_average: string
  poster_path: string
  release_date: string
}

const Home: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [noData, setNoData] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    client
      .get('/')
      .then((response) => {
        setMovies(response.data.results)
        setNoData(false)
      })
      .catch(() => setNoData(true))
  }, [])

  return (
    <div>
      <Header />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Space style={{ margin: 32 }}>
            <Button onClick={() => navigate('/search')}>Search a movie</Button>
          </Space>
        </li>
      </ul>
      <Space style={{ marginBottom: 24, marginLeft: 32, fontSize: 24 }}>
        <Text
          my={1}
          display='block'
          lineHeight='normal'
          fontWeight='semibold'>
          The most popular movies in the past two weeks:
        </Text>
      </Space>
      {noData ? <Styled.ImageStyle><img src={noSignal} /></Styled.ImageStyle> : <MovieList movies={movies} />}
    </div>
  )
}

export default Home