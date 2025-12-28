import {serviceList} from '../../constants';
import {Service} from '../Service/Service';
import styles from './Services.module.css'

export const Services = () => {
    return (
        <>
            <h3 className={styles.services__title}>
                Сервисы и услуги
            </h3>
            <div className={styles.services__list}>
                {
                    serviceList.map((service) => (
                        <Service key={service.id} service={service} />
                    ))
                }
            </div>
        </>
    )
}