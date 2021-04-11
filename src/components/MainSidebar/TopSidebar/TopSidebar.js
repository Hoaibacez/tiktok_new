import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import Button from '../../../packages/sondn-button'
import config from '../../../config'
import styles from './TopSidebar.module.scss'

function TopSidebar({
    onLogin = () => {}
}) {
    return (
        <div className={styles.wrapper}>
            <NavLink to={config.routes.home} activeClassName={styles.selected} className={styles.navItem}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                <span>For You</span>
            </NavLink>
            <NavLink to={config.routes.following} activeClassName={styles.selected} className={styles.navItem}>
                <FontAwesomeIcon icon={faUsers} className={styles.navIcon} />
                <span className={styles.test}>Following</span>
            </NavLink>

            <div className={styles.description}>
                <p>Log in to follow creators, like videos, and view comments.</p>
                <Button type="border" size="l" onClick={onLogin}>Log in</Button>
            </div>
        </div>
    )
}

export default TopSidebar
