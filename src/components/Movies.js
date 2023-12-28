import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movies({ movielist }) {
  return (
    <div className={styles.movie}>
      {movielist.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={movie.medium_cover_image}
              alt="cover"
              className={styles.movie__img}
            />
          </Link>
          <div>
            <h2 className={styles.movie__title}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h2>
            <h4 className={styles.movie__year}>{movie.year}</h4>
            <p>
              {movie.summary.length > 200
                ? `${movie.summary.slice(0, 200)}...`
                : movie.summary}
            </p>
            <ul className={styles.movie__genres}>
              {movie.genres.map((gen) => (
                <li key={gen}>{gen}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

Movies.propTypes={
    movielist : PropTypes.array.isRequired
}

export default Movies;
