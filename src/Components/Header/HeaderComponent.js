import styles from './Header.module.css';

import { MdOutlineRoundaboutRight, MdHistory } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { FaBook } from "react-icons/fa";

const HeaderComponent = () => {
    let test = true;


    return (
        <header className={styles.header}>
            <div className={styles.header__menu}>
                <div className={styles.header__logo}>
                    <h1><span>D</span>razic</h1>
                </div>
                <div className={styles.header__button}>
                    <a><MdOutlineRoundaboutRight className={styles.icons}/> SOBRE</a>
                    <a><MdHistory className={styles.icons}/> HISTÓRIA</a>
                    <a><TiContacts className={styles.icons}/> CONTATOS</a>
                    <button className={styles.button__cta}><FaBook className={styles.icons}/> COMPRAR EBOOK</button>
                </div>
            </div>
        </header>
    )
};  

export default HeaderComponent;