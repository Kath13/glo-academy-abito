import styles from './Card.module.css'
import {Link} from 'react-router';

export const Card = ({id, title, price, address, date, imageURL}) => {
    return (
        <>
            <Link to={`/product/${id}`} className={styles.card}>
                <div className={styles.cardImg}>
                    <img src={`/image/${imageURL}`} alt={`Изображение товара ${title}`}/>
                </div>
                <h5 className={styles.cardTitle}>{title}</h5>
                <strong className={styles.cardPrice}>{price} ₽</strong>
                <div className={styles.cardDescBox}>
                    <span className={styles.cardDesc}>{address}</span>
                    <span className={styles.cardDesc}>{date}</span>
                </div>
            </Link>
        </>
    )
}
