import {Outlet} from 'react-router';
import {Header} from '../components/Header/Header';
import {Search} from '../components/Search/Search';
import {Services} from '../components/Services/Services';
import {Footer} from '../components/Footer/Footer';

export const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Search/>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <Outlet/>
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