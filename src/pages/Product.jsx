import {Header} from '../components/Header/Header';
import {Services} from '../components/Services/Services';
import {Footer} from '../components/Footer/Footer';
import {Search} from '../components/Search/Search';

export const Product = () => {
    return (
        <>
            <Header/>
            <main>
                <Search />
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__info-box">
                                    <h3 className="content-product__title">
                                        Электросамокат kugoo Gx
                                    </h3>
                                    <img className="content-product__img" src="/image/product.png"
                                         alt="Product image"/>
                                    <div className="content-product__desc">
                                        <p>Продаю не спеша самокат в хорошем состоянии.</p>
                                        <p>Торг возможен.</p>
                                        <p>За период эксплуатации не выявлено ни одной проблемы.</p>
                                        <p>Из минусов — нужно прокачать задний тормоз.</p>
                                        <p>Установлен отсекатель сзади.</p>
                                        <p>Покрышки CST внедорожные.</p>
                                        <p>Все на подшипниках, болты протянуты.</p>
                                        <p>Пробег 881км , это немного для такого зверя.</p>
                                    </div>
                                </div>
                                <div className="content-product__summary-box">
                                    <span className="content-product__price">75 000 ₽</span>
                                    <button className="content-product__show-phone-btn btn btn-primary">Показать телефон
                                    </button>
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