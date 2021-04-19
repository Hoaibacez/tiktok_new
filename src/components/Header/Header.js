import { Grid } from "@mycv/mycv-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../packages/bacnh-button";
import logoDark from "../../assets/img/logo-dark.svg";
import logoTextDark from "../../assets/img/logo-text-dark.svg";
import config from "../../config";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Grid type="wide" maxWidth={config.mainWidth}>
        <div className={styles.content}>
          <Link to={config.routes.home} className={styles.logoBox}>
            <img src={logoDark} alt="" />
            <img src={logoTextDark} alt="Tiktok" />
          </Link>

          <div className={styles.searchBox}>
            <input placeholder="Search accounts" />
            <button>
              <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </button>
          </div>

          <div className={styles.btn}>
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
