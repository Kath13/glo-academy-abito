import './Search.css'
import {useState} from 'react';

export const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = (e) => {
        onSearch(searchText);
    }

    return (
        <>
            <section className="search">
                <div className="container">
                    <div className="search-box">
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearch}
                            placeholder="Поиск по объявлениям"/>
                        <button
                            className="btn btn-primary search-btn"
                            onClick={handleClick}
                        >
                            <img src="/image/search.svg" alt="Search" className="search-btn__icon"/>
                            <span className="search-btn__text">Найти</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}