import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchResultItem.module.scss";
function SearchResultItem(props) {
  const className = [props.auth ? styles.show : ""];
  console.log(className);

  return (
    <li>
      <h3>{props.userName}</h3>
      <FontAwesomeIcon className={className.join("")} icon={faCheckCircle} />
    </li>
  );
}

export default SearchResultItem;
