import './ProductInfo.css'

export const ProductInfo = ({product}) => {
    const {title, imageURL, price, description} = product;

    return (
        <>
            <div className="content-product">
                <div className="content-product__info-box">
                    <h3 className="content-product__title">
                        {title}
                    </h3>
                    <img className="content-product__img" src={`/image/${imageURL}`}
                         alt="Product image"/>
                    <div className="content-product__desc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="content-product__summary-box">
                    <span className="content-product__price">{price} ₽</span>
                    <button className="content-product__show-phone-btn btn btn-primary">Показать телефон
                    </button>
                </div>
            </div>
        </>
    )
}