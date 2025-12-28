import {Header} from '../components/Header/Header';
import {Services} from '../components/Services/Services';
import {Footer} from '../components/Footer/Footer';
import {Search} from '../components/Search/Search';
import {useParams} from 'react-router';
import {cardArray} from '../constants';
import {ProductInfo} from '../components/ProductInfo/ProductInfo';

export const Product = () => {
    const {id} = useParams()
    const product = cardArray.find(item => item.id == id)

    return (
        <>
            <Header/>
            <main>
                <Search />
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <ProductInfo product={product} />
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