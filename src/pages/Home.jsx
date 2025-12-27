import {Header} from '../components/Header/Header';
import {Card} from '../components/Card/Card';
import {cardArray, serviceList} from '../constants';
import {Service} from '../components/Service/Service';
import {Footer} from '../components/Footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Поиск по объявлениям"/>
                            <button className="btn btn-primary search-btn">
                                <img src="/image/search.svg" alt="Search" className="search-btn__icon"/>
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">
                                    Рекомендации для вас
                                </h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map((card) => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                imageURL={card.imageURL}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">
                                    Сервисы и услуги
                                </h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        {
                                            serviceList.map((service) => (
                                                <Service key={service.id} service={service} />
                                            ))
                                        }
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
)
}