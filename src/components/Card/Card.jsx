import './Card.css'

export const Card = () => {
    return (
        <>
            <a href="/product.html" className="content-main__list-item">
                <div className="content-main__list-item--img">
                    <img src="/image/card-img.png" alt="Изображение товара Пвх материал 2й сорт" />
                </div>
                <h5 className="content-main__list-item--title">Пвх материал 2й сорт</h5>
                <strong className="content-main__list-item--price">170 ₽</strong>
                <div className="content-main__list-item--desc-box">
                                            <span
                                                className="content-main__list-item--desc">Казань, р-н Вахитовский</span>
                    <span className="content-main__list-item--desc">10 июля 11:39</span>
                </div>
            </a>
        </>
    )
}