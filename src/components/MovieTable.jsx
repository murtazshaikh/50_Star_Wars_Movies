import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieTable.css";

const MovieTable = ({ movies }) => {
  const navigate = useNavigate();

  const [sortConfig, setSortConfig] = useState({
    key: "title",
    direction: "asc",
  });

  const sortedMovies = [...movies].sort((a, b) => {
    const aVal = a[sortConfig.key]?.toLowerCase?.() ?? a[sortConfig.key];
    const bVal = b[sortConfig.key]?.toLowerCase?.() ?? b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("title")}>
            Title
            <span className="sort-icon">
              {sortConfig.key === "title"
                ? sortConfig.direction === "asc"
                  ? " ↑"
                  : " ↓"
                : "  "}
            </span>
          </th>

          <th onClick={() => handleSort("release_date")}>
            Release Date
            <span className="sort-icon">
              {sortConfig.key === "release_date"
                ? sortConfig.direction === "asc"
                  ? " ↑"
                  : " ↓"
                : "  "}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedMovies.map((movie, index) => (
          <tr key={index} onClick={() => navigate(`/movie/${index}`)}>
            <td>{movie.title}</td>
            <td>{movie.release_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
