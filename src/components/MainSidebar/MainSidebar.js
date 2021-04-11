import TopSidebar from './TopSidebar'
import SuggestAccount from './SuggestAccount'
import Footer from './Footer'
import styles from './MainSidebar.module.scss'
import phuonglytran from '../../assets/img/phuong_ly.jpeg'
import my_vanh from '../../assets/img/my_vanh.jpeg'
import ameemee from '../../assets/img/ameemee.jpeg'
import Min_Min from '../../assets/img/minminmin0712.jpeg'

function MainSidebar({ onLogin }) {
    return (
        <div className={styles.wrapper}>
            <TopSidebar onLogin={onLogin} />

            <SuggestAccount
                data={[
                    {
                        id: 1,
                        avatar: phuonglytran,
                        username: 'phuonglytran',
                        name: 'Phương Ly Trần',
                    },
                    {
                        id: 2,
                        avatar: my_vanh,
                        username: 'my_vanh',
                        name: 'Vân Choè',
                    },
                    {
                        id: 3,
                        avatar: ameemee,
                        username: 'ameemee_m',
                        name: 'AMEE',
                    },
                    {
                        id: 4,
                        avatar: Min_Min,
                        username: 'minminmin0712',
                        name: 'Min Min',
                    }
                ]}
            />

            <Footer />
        </div>
    )
}

export default MainSidebar
