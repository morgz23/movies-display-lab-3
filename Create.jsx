import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ onCreateMovie }) {
  // Keep the current value of each form field in React state.
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')

  // Get the router function used to move to the Read page after submission.
  const navigate = useNavigate()

  // Handle form submission without reloading the browser page.
  function handleSubmit(event) {
    event.preventDefault()

    // Build a movie object and send it to App to add to the shared list.
    onCreateMovie({
      Title: title.trim(),
      Year: year,
      imdbID: `movie-${Date.now()}`,
      Type: 'movie',
      Poster: poster.trim() || 'https://placehold.co/300x450?text=No+Poster',
    })

    // Show the updated movie list after creating the movie.
    navigate('/read')
  }

  return (
    <main className="container py-4">
      <h3>Hello from the Create component</h3>
      {/* Call handleSubmit when the user submits the form. */}
      <form className="mt-4 text-start" onSubmit={handleSubmit}>
        {/* The title input is controlled by the title state value. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-title">
            Title
          </label>
          <input
            className="form-control"
            id="movie-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        {/* The year input is controlled by the year state value. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-year">
            Year
          </label>
          <input
            className="form-control"
            id="movie-year"
            type="number"
            min="1888"
            max="2100"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
          />
        </div>
        {/* The poster URL is optional; a placeholder is used if it is blank. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-poster">
            Poster URL (optional)
          </label>
          <input
            className="form-control"
            id="movie-poster"
            type="url"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />
        </div>
        {/* Submit the entered movie details. */}
        <button className="btn btn-primary" type="submit">
          Add movie
        </button>
      </form>
    </main>
  )
}