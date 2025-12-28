import styles from './Footer.module.css'
export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <p className={styles.footerItem}>ООО «Абито», 2011–2021</p>
                <a href="#!" className={styles.footerItem}>Политика конфиденциальности</a>
                <a href="#!" className={styles.footerItem}>Обработка данных</a>
            </div>
        </>
    )
}