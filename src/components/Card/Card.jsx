import './Card.css'

export const Card = ({title, price, address, date, imageURL}) => {
    return (
        <>
            <a href="/product" className="card">
                <div className="card--img">
                    <img src={`/image/${imageURL}`} alt={`Изображение товара ${title}`}/>
                </div>
                <h5 className="card--title">{title}</h5>
                <strong className="card--price">{price} ₽</strong>
                <div className="card--desc-box">
                    <span className="card--desc">{address}</span>
                    <span className="card--desc">{date}</span>
                </div>
            </a>
        </>
    )
}