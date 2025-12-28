import './Search.css'

export const Search = () => {
    return (
        <>
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
        </>
    )
}