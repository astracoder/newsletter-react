import styles from './Header.module.css';

import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';

const HeaderComponent = () => {
    let test = true;


    return (
        <header className={styles.header}>
            <div className={styles.header__menu}>
                <div className={styles.header__logo}>
                    <h1><span>D</span>razic</h1>
                </div>
                <div className={styles.header__button}>
                    <a><MdOutlineRoundaboutRight /> SOBRE</a>
                    <a><MdHistory /> HISTÓRIA</a>
                    <a><TiContacts /> CONTATOS</a>
                    <button className={styles.button__cta}>COMPRAR EBOOK</button>
                </div>
            </div>
        </header>
    )
};  

export default HeaderComponent;