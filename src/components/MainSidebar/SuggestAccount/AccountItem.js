import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import config from "../../../config";
import styles from "./SuggestAccount.module.scss";

function AccountItem({ avatar = "", username = "", name = "", tick = "" }) {
  const checkTickClass = tick ? { display: "block" } : { display: "none" };
  return (
    <Tippy content="Hello" placement="bottom">
      <Link
        to={`${config.routes.home}@${username}`}
        className={styles.accountItem}
      >
        <img src={avatar} className={styles.avatar} alt={username} />
        <div className={styles.accountBody}>
          <div className={styles.display}>
            <h3 className={styles.username}>{username}</h3>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.iconTick}
              style={checkTickClass}
            />
          </div>
          <p className={styles.name}>{name}</p>
        </div>
      </Link>
    </Tippy>
  );
}

export default AccountItem;
