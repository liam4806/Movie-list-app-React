import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Detail.module.css";
import Header from "../components/Header";
function Detail (){
    const [movie, setmovieinfo] = useState({});
    const [loading, setloading] = useState(false);
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(
        (data)=>data.json()
        ).then(
            (data)=>{
            setmovieinfo((cur)=>data.data.movie);
            setloading(true);
          }
        )
    },[])
    console.log(movie)
    return (
      <div className={styles.container}>
        <Header />
        {loading ? (
          <div>
            <img
              src={movie.background_image_original}
              className={styles.backg}
            />
            <div className={styles.movies} id={movie.id}>
              <div>
                <img src={movie.large_cover_image} className={styles.im} />
              </div>
              <div className={styles.contents}>
                <h1>
                  <a href={movie.url} className={styles.url}>
                    {movie.title}
                  </a>
                </h1>
                <h4 className={styles.movie__year}>{movie.year}</h4>
                <h4>
                  <a href={movie.url} className={styles.url}>
                    View
                  </a>
                </h4>
                <p>{movie.description_full}</p>
                <h4>Genre:</h4>
                <div className={styles.genre}>
                  {movie.genres?.map((cur) => (
                    <ul key={cur}>{cur}</ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loader}>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    );
}
export default Detail;