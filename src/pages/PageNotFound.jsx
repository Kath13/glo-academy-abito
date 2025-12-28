import styles from './PageNotFound.module.css'
import {Link} from 'react-router';

export const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <img src="/image/404.png"></img>
            <Link to={'/'}>
                <button className="btn btn-primary">На главную</button>
            </Link>
        </div>
    )
}