import {Outlet, useNavigate} from 'react-router';
import {Header} from '../components/Header/Header';
import {Search} from '../components/Search/Search';
import {Services} from '../components/Services/Services';
import {Footer} from '../components/Footer/Footer';
import {useEffect, useState} from 'react';
import {cardArray} from '../constants';

export const Layout = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(cardArray);
    }, []);

    const onSearch = (value) => {
        setProducts(filterArray(cardArray, value));
        navigate('/');
    }

    const filterArray = (array, value) => {
        return array.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.price.toString().includes(value.toLowerCase()))
    }

    return (
        <>
            <Header/>
            <main>
                <Search onSearch={onSearch} />
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <Outlet context={{products}}/>
                            </div>
                            <div className="content-side">
                                <div className="content-side__box">
                                    <Services/>
                                    <Footer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}