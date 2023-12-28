import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { Link } from "react-router-dom";
function Home() {
  const [loading, setloading] = useState(false);
  const [searching, setsearching] = useState(true);
  const [movielist, setmovielist] = useState([]);
  const [listforsearch, setsearch] = useState([]);
  const [input, setinput] = useState("");
  async function fetching(tar) {
    const data = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&limit=50"
      )
    ).json();
    setmovielist((cur)=>data.data.movies);
    if (tar == null) {
        setloading((cur) => true);
    }else{
    const result = data.data.movies.filter((movie)=>{
      return (movie.title.toLowerCase().includes(tar.toLowerCase()));}
    )
    setsearch((cur)=>result)
    setsearching((cur)=>!cur)
    }
  }
  useEffect(() => {
    fetching();
  }, []);
  const onchange = (e)=>{
    setinput((cur)=>e.target.value);
    setsearching((cur) => !cur);
    fetching(e.target.value);
  }
  return (
    <div>
      <Header />
      <Searchbar input={input} onchange = {onchange} searching = {searching} listforsearch = {listforsearch}/>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.movies}>
            <Movies movielist={movielist} />
          </div>
        ) : (
          <div className={styles.loader}>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;