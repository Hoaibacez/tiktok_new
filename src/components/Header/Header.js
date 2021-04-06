import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Grid} from '@mycv/mycv-grid'


import logoTextDark from '../../assets/img/logo-text-dark.svg'
import styles from './Header.module.scss'
import Button from '../../packages/bacnh-button/Button'

function Header() {
    return (
        <header className={styles.wrapper}>
            <Grid type='wide'>
                <div className={styles.body}>
                    <img src={logoTextDark} className={styles.logo} alt='Tiktok' />
                    <div className={styles.searchBox}>
                        <input className={styles.searchInput} placeholder='Tim kiem' />

                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                        <div>
                            <Button 
                                title='Upload'
                                type='normal'
                            />
                            <Button 
                                title='Login'
                                type='primary'
                            />
                        </div>
                    </div>
                </div>
            </Grid>
        </header>
    )
}

export default Header
