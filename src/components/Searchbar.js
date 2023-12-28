import { Link } from "react-router-dom";
import styles from "./Searchbar.module.css";

function Searchbar({input, onchange, searching, listforsearch}){
    return (
      <div>
        <div className={styles.searchbar_container}>
          <div className={styles.searchbar_inner}>
            <input
              className={styles.searchbar}
              value={input}
              onChange={onchange}
              placeholder="Search Movie"
            ></input>
          </div>
          <div className={input != "" ? styles.searchresult : styles.hide}>
            <div className={styles.padding}>
              {input !== "" ? (
                searching ? (
                  listforsearch.length === 0 ? (
                    <div className={styles.searching}>
                      <h3>Not in the Movie List</h3>
                    </div>
                  ) : (
                    listforsearch.map((mov) => (
                      <ul className={styles.results} key={mov.id}>
                        <Link className={styles.text} to={`/movies/${mov.id}`}>
                          {mov.title}
                        </Link>
                      </ul>
                    ))
                  )
                ) : (
                  <div className={styles.searching}>
                    <h3>Searching...</h3>
                  </div>
                )
              ) : (
                <div className={styles.hide}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Searchbar;