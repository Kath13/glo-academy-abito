import {Header} from '../components/Header/Header';
import {Services} from '../components/Services/Services';
import {Footer} from '../components/Footer/Footer';
import {Search} from '../components/Search/Search';
import {useParams} from 'react-router';
import {cardArray} from '../constants';
import {ProductInfo} from '../components/ProductInfo/ProductInfo';
import {NotFound} from '../components/NotFound/NotFound';

export const Product = () => {
    const {id} = useParams()
    const product = cardArray.find(item => item.id === +id)

    return (
        <>
            <Header/>
            <main>
                <Search />
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="product-container">
                                {product ? <ProductInfo product={product}/> : <NotFound />}
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