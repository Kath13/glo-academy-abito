import './ProductInfo.css'

export const ProductInfo = ({product}) => {
    const {title, imageURL, price, description} = product;

    return (
        <>
            <div className="product">
                <div className="product__info-box">
                    <h3 className="product__title">
                        {title}
                    </h3>
                    <img className="product__img" src={`/image/${imageURL}`}
                         alt="Product image"/>
                    <div className="product__desc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="product__summary-box">
                    <span className="product__price">{price} ₽</span>
                    <button className="product__show-phone-btn btn btn-primary">Показать телефон
                    </button>
                </div>
            </div>
        </>
    )
}