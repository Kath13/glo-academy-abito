import styles from './Header.module.css'
import {Link} from 'react-router';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerBox}>
                    <Link to="/" className={styles.headerLogo}>
                        <img src="/image/logo.svg" alt="Abito logotype"/>
                        <span>Abito</span>
                    </Link>
                    <div className={styles.headerControls}>
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className={styles.headerBurger}>
                        <img src="/image/burger.svg" alt="Menu"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
