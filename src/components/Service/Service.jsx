import styles from './Service.module.css'

export const Service = ({service}) => {
    const {title, description, imageURL} = service
    return (
        <>
            <div className={styles.container}>
                <img className={styles.serviceImg} src={`/image/${imageURL}`} alt={title}/>
                <h5 className={styles.serviceTitle}>{title}</h5>
                <p className={styles.serviceDesc}>{description}</p>
            </div>
        </>
    )
}