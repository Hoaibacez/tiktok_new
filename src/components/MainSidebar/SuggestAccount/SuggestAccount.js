import AccountItem from "./AccountItem";
import styles from "./SuggestAccount.module.scss";

function SuggestAccount({ data = [] }) {
  // console.log(data);
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Suggested accounts</p>

      {data.map((account) => (
        <AccountItem
          key={account.data.id}
          avatar={account.data.avatar}
          username={account.data.nickname}
          name={account.fullName}
          tick={account.data.tick}
        />
      ))}
    </div>
  );
}

export default SuggestAccount;
