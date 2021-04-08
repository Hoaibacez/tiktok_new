import { Grid } from "@mycv/mycv-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import SearchResult from "./SearchResult";
import Button from "../../packages/bacnh-button";
import logoDark from "../../assets/img/logo-dark.svg";
import logoTextDark from "../../assets/img/logo-text-dark.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Grid type="wide">
        <div className={styles.content}>
          <div className={styles.logoBox}>
            <img src={logoDark} alt="" />
            <img src={logoTextDark} alt="Tiktok" />
          </div>

          <div>
            <div className={styles.searchBox}>
              <input placeholder="Search accounts" />
              <button>
                <FontAwesomeIcon
                  className={styles.searchIcon}
                  icon={faSearch}
                />
              </button>
            </div>

            <SearchResult />
          </div>

          <div>
            <Button type="normal" underline>
              Upload
            </Button>
            <Button type="primary">Log in</Button>
          </div>
        </div>
      </Grid>
    </header>
  );
}

export default Header;
