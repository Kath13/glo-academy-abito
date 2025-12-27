import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <a href="#!" className="header-logo">
                        <img src="/image/logo.svg" alt="Abito logotype"/>
                        <span>Abito</span>
                    </a>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="Menu"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
