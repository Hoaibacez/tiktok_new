import { Link } from 'react-router-dom'

import config from '../../../config'
import styles from './SuggestAccount.module.scss'

function AccountItem({
    avatar = '',
    username = '',
    name = '',
}) {
    return (
        <Link
            to={`${config.routes.home}@${username}`}
            className={styles.accountItem}
        >
            <img src={avatar} className={styles.avatar} alt={username} />
            <div className={styles.accountBody}>
                <h3 className={styles.username}>{username}</h3>
                <p className={styles.name}>{name}</p>
            </div>
        </Link>
    )
}

export default AccountItem
