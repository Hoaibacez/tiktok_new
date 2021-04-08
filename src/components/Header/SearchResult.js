import SearchResultItem from "./SearchResultItem";
import styles from "./SearchResult.module.scss";

const UserData = [
  {
    id: 1,
    userName: "9gag",
    auth: true
  },
  {
    id: 2,
    userName: "YouTube",
    auth: false
  },
  {
    id: 3,
    userName: "The Facebook",
    auth: true
  }
];

function SearchResult() {
  return (
    <div className={styles.wrapper}>
      <ul>
        {UserData.map((user) => (
          <SearchResultItem
            key={user.id}
            userName={user.userName}
            auth={user.auth}
          />
        ))}
      </ul>
      <p>Xem tất cả kết quả dành cho '{}'</p>
    </div>
  );
}

export default SearchResult;
