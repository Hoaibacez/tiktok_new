import AccountItem from './AccountItem'
import styles from './SuggestAccount.module.scss'

function SuggestAccount({
    data = []
}) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.heading}>Suggested accounts</p>

            {data.map(account => (
                <AccountItem
                    key={account.id}
                    avatar={account.avatar}
                    username={account.username}
                    name={account.name}
                />
            ))}
        </div>
    )
}

export default SuggestAccount
