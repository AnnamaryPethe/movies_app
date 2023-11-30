import React, { FC, useEffect, useState } from 'react'
import { ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react'
import MovieCard from './MovieCard'
import { Movie } from './Home'

type Movies = {
  movies: Movie[]
}

const MovieList: FC<Movies> = ({ movies }) => {

  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {movies?.map(movie => {
            const { id, title, overview, vote_average, poster_path, release_date } = movie
            return (
              <MovieCard
                key={id}
                title={title}
                overview={overview}
                posterPath={poster_path}
                releaseDate={release_date}
                voteAverage={vote_average}
              />
            )
          })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}

export default MovieList