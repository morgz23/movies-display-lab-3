import Movies from './Movies.jsx'

// Provide starter data for the movie list.
export const initialMovies = [
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Captain America: Civil War',
    Year: '2016',
    imdbID: 'tt3498820',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg',
  },
  {
    Title: 'World War Z',
    Year: '2013',
    imdbID: 'tt0816711',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
  },
]

// Use the supplied list, or the starter list when no prop is provided.
export default function Read({ movies = initialMovies }) {
  return (
    <main className="container py-4">
      <h3>Hello from the Read component</h3>
      {/* Pass the movie data to Movies so it can render the list. */}
      <Movies movies={movies} />
    </main>
  )
}