import styles from './Search.module.css'
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
            <section className={styles.search}>
                <div className="container">
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearch}
                            placeholder="Поиск по объявлениям"/>
                        <button
                            className={`btn btn-primary ${styles.searchBtn}`}
                            onClick={handleClick}
                        >
                            <img src="/image/search.svg" alt="Search" className={styles.searchBtn__icon}/>
                            <span className={styles.searchBtn__text}>Найти</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}