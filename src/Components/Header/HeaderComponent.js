import styles from './Header.module.css';

const HeaderComponent = () => {
    let test = true;


    return (
        <header className={styles.header}>
            <div className={styles.header__menu}>
                <div className={styles.header__logo}>
                    <h1><span>D</span>razic</h1>
                </div>
                <div className={styles.header__button}>
                    <button className={styles.button__cta}>COMPRAR EBOOK</button>
                </div>
            </div>
        </header>
    )
};  

export default HeaderComponent;