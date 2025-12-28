import styles from './ProductInfo.module.css'

export const ProductInfo = ({product}) => {
    const {title, imageURL, price, description} = product;

    return (
        <>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <img className={styles.productImg} src={`/image/${imageURL}`}
                     alt="Product image"/>
                <div className={styles.desc}>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.summaryBox}>
                <span className={styles.price}>{price} ₽</span>
                <button className={`${styles.showPhoneBtn} btn btn-primary`}>Показать телефон
                </button>
            </div>
        </>
    )
}