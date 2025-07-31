import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MovieDetail.css";
import { Helmet } from "react-helmet";

const MovieDetail = () => {
  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.data[id]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const responses = await Promise.all(
          movie.characters.slice(0, 5).map((url) => axios.get(url))
        );
        setCharacters(responses.map((res) => res.data.name));
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoadingCharacters(false);
      }
    };

    fetchCharacters();
  }, [movie?.characters]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <Helmet>
        <title>{movie.title} - Star Wars</title>
        <meta
          name="description"
          content={`Details for ${movie.title}, directed by ${movie.director}`}
        />
      </Helmet>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{movie.title}</h1>
      <p>
        <strong>Episode:</strong> {movie.episode_id}
      </p>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Producer:</strong> {movie.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>

      <div className="crawl-box">
        <h2>Opening Crawl</h2>
        <pre>{movie.opening_crawl}</pre>
      </div>

      <div className="character-section">
        <h2>Characters</h2>
        {loadingCharacters ? (
          <p>Loading characters...</p>
        ) : (
          <ul>
            {characters?.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
