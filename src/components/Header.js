import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header(){
    return (
      <header className={styles.header}>
        <div className={styles.containeer}>
          <div className={styles.logo}>
            <h1>
              <Link className={styles.text} to="/">
                Movie Lists
              </Link>
            </h1>
          </div>
        </div>
      </header>
    );
}


export default Header;