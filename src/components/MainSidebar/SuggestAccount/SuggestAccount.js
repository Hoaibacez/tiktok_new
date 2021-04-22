import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import AccountItem from "./AccountItem";
import styles from "./SuggestAccount.module.scss";

function SuggestAccount({ 
  data = [], 
  expandedTitle = 'See more',
  collapseTitle = 'See less',
  hideSeeBtn = false,
  // isExpanded = 'false',
  isCollapse = 'false',
  collapsedHeight = 'initial',
  onSeeToggle = () =>{}
  }) {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Suggested accounts</p>
      <div className={styles.inner} style={{ maxHeight: collapsedHeight }}>
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

      {!hideSeeBtn && (
        <div className={styles.seeBtn} onClick={onSeeToggle}>
            <span>{(isCollapse) ? collapseTitle : expandedTitle}</span>
            <FontAwesomeIcon className={styles.seeIcon} icon={isCollapse ? faChevronUp : faChevronDown} />
        </div>
      )}

    </div>
  );
}

export default SuggestAccount;
