import TopSidebar from './TopSidebar'
import SuggestAccount from './SuggestAccount'
import Footer from './Footer'
import styles from './MainSidebar.module.scss'
// import phuonglytran from '../../assets/img/phuong_ly.jpeg'
// import my_vanh from '../../assets/img/my_vanh.jpeg'
// import ameemee from '../../assets/img/ameemee.jpeg'
// import Min_Min from '../../assets/img/minminmin0712.jpeg'

function MainSidebar({ onLogin, sugestAcount }) {
    return (
        <div className={styles.wrapper}>
            <TopSidebar onLogin={onLogin} />

            <SuggestAccount
                data={sugestAcount}
            />

            <Footer />
        </div>
    )
}

export default MainSidebar
