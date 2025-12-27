import {Header} from '../components/Header/Header';

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
                                    {/*<a href="/product.html" className="content-main__list-item">*/}
                                    {/*    <div className="content-main__list-item__img">*/}
                                    {/*        <img src="/image/card-img.png" alt="Изображение товара Пвх материал 2й сорт" />*/}
                                    {/*    </div>*/}
                                    {/*    <h5 className="content-main__list-item__title">Пвх материал 2й сорт</h5>*/}
                                    {/*    <strong className="content-main__list-item__price">170 ₽</strong>*/}
                                    {/*    <div className="content-main__list-item__desc-box">*/}
                                    {/*        <span*/}
                                    {/*            className="content-main__list-item__desc">Казань, р-н Вахитовский</span>*/}
                                    {/*        <span className="content-main__list-item__desc">10 июля 11:39</span>*/}
                                    {/*    </div>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">
                                    Сервисы и услуги
                                </h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/image/site-info1.svg"
                                                 alt=""/>
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--desc">Проверка при получении и
                                                возможность бесплатно
                                                вернуть товар</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/image/site-info2.svg"
                                                 alt=""/>
                                            <h5 className="content-side__list-item--title">Автотека</h5>
                                            <p className="content-side__list-item--desc">Отчёт с историей авто: пробег,
                                                владельцы,
                                                сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/image/site-info3.svg"
                                                 alt=""/>
                                            <h5 className="content-side__list-item--title">Онлайн-бронирование
                                                жилья</h5>
                                            <p className="content-side__list-item--desc">Посуточная аренда квартир и
                                                домов: большой
                                                выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>
                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">ООО «Абито», 2011–2021</p>
                                        <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
)
}