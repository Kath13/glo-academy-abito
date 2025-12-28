import {Card} from '../components/Card/Card';
import {cardArray} from '../constants';

export const Home = () => {
    return (
        <>
            <div className="content-main">
                <h2 className="content-main__title">
                    Рекомендации для вас
                </h2>
                <div className="content-main__list">
                    {
                        cardArray.map((card) => (
                            <Card
                                key={card.id}
                                id={card.id}
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
        </>
    )
}