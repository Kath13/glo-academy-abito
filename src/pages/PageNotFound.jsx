import './PageNotFound.css'
import {Link} from 'react-router';

export const PageNotFound = () => {
    return (
        <div className="notfound-container">
            <img src="/image/404.png"></img>
            <Link to={'/'}>
                <button className="btn btn-primary">На главную</button>
            </Link>
        </div>
    )
}