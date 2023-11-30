import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../client'
import Header from '../Header/Header'
import { Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import MovieList from '../MovieList'
import no_data from '../../asstest/no_data.jpg'
import * as Styled from '../../styles'

const SearchMovie = () => {
  const [inputValue, setInputvalue] = useState('')
  const [movies, setMovies] = useState([])
  const [noData, setNoData] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await client
      .post('/search', { value: inputValue })
      .then(response => {
        setMovies(response.data.data.results)
        setNoData(false)
      })
      .catch(() => setNoData(true))
  }

  return (
    <div>
      <Header />
      <Space style={{ margin: 32 }}>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Input placeholder="Type here" allowClear onChange={(e) => setInputvalue(e.target.value)} />
        <Button icon={<SearchOutlined />} onClick={handleSubmit}>Search</Button>
      </Space>
      {noData ? <Styled.ImageStyle><img src={no_data} /></Styled.ImageStyle> : <MovieList movies={movies} />}
      <MovieList movies={movies} />
    </div>
  )
}

export default SearchMovie