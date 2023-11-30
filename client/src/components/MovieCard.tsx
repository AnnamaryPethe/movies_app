import React, { FC } from 'react'
import { Stack, Box, Text, Button, Image, Tooltip } from '@chakra-ui/react'

type Props = {
  id?: string
  title: string
  overview: string
  voteAverage: string
  posterPath: string
  releaseDate: string
}

const MovieCard: FC<Props> = (props) => {
  const { title, overview, voteAverage, posterPath } = props

  return (

    <Box
      p={4}
      display={{ md: 'flex' }}
      maxWidth='32rem'
      borderWidth={1}
      margin={2}
    >
      <Image
        maxWidth='200px'
        margin='auto'
        src={posterPath ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : ''}
      />
      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='lg'
          letterSpacing='wide'
          color='blue.600'
        >
          {title}
        </Text>
        <Text
          my={1}
          display='block'
          fontSize='md'
          lineHeight='normal'
          fontWeight='semibold'>
          {overview}
        </Text>
        <Text my={2} color='gray.500'>
          Vote avarage: {voteAverage}
        </Text>
        <Tooltip label='Coming soon'>
          <Button maxWidth='100px' my={2}>
            Read more
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  )
}

export default MovieCard