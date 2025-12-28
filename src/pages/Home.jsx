import {Card} from '../components/Card/Card';
import {useOutletContext} from 'react-router';

export const Home = () => {

    const context = useOutletContext();

    console.log(context.products);
    return (
        <>
            <div className="content-main__container">
                <h2 className="content-main__title">
                    Рекомендации для вас
                </h2>
                <div className="content-main__list">
                    {
                        context.products ? context.products.map((card) => (
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
                            :
                            'No products found.'
                    }
                </div>
            </div>
        </>
    )
}