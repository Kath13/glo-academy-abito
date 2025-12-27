import {serviceList} from '../../constants';
import {Service} from '../Service/Service';
import './Services.css'

export const Services = () => {
    return (
        <>
            <h3 className="services__title">
                Сервисы и услуги
            </h3>
            <div className="services__list">
                {
                    serviceList.map((service) => (
                        <Service key={service.id} service={service} />
                    ))
                }
            </div>
        </>
    )
}