import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="header__menu">
                <div className="header__logo">
                    <h1><span>D</span>razic</h1>
                </div>
                <div className="header__button">
                    <button className="button__cta">COMPRAR EBOOK</button>
                </div>
            </div>
        </header>
    )
};  

export default HeaderComponent;