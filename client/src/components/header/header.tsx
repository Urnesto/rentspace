export const header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="logo">
                    Loft-Club
                </h1>
                <div className="header__picker">
                    <p>Ваш город:</p>
                    <button>Москва</button>
                </div>
                <div className="header__logo__img">
                    <img src="" alt="#" />
                </div>

                <nav className="header__nav">
                    <ul className="nav__wrapper">
                        <li>
                            Информация
                        </li>
                        <li>
                            Лофты
                        </li>
                        <li>
                            О нас
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
