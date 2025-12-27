import {Header} from '../components/Header/Header';
import {Card} from '../components/Card/Card';
import {cardArray} from '../constants';
import {Footer} from '../components/Footer/Footer';
import {Services} from '../components/Services/Services';

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
                                <div className="content-side__box">
                                    <Services />
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