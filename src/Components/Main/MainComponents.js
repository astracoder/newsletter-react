import styles from './Main.module.css';
import { MdAccountCircle, MdAlternateEmail } from 'react-icons/md';

import { useState } from 'react';
import ModalComponents from "../Modal/ModalComponents";

const MainComponents = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [nameValue, setNameValue] = useState();
    const [emailValue, setEmailValue] = useState();

  return (
    <main className={styles.main}>
        <section className={styles.main__content}>
            <h2>Seja bem-vindo a sua melhor newsletter</h2>
            <h3>Fique por dentro de todas as novidades</h3>
            <p>Preecha os campos para receber as notificações</p>
            <form className={styles.form} action="#">
                <MdAccountCircle className={styles.icons} />
                <div className={styles.inputs}>
                    <input 
                        type="text" 
                        name="name" 
                        id={styles.input__name} 
                        onChange={e => setNameValue(e.target.value)}
                        required
                    ></input>
                    <span>Nome:</span>
                    <i></i>
                </div>
                <MdAlternateEmail className={styles.icons} />
                <div className={styles.inputs}>
                    <input 
                        type="text" 
                        name="email" 
                        id={styles.input__email} 
                        onChange={e => setEmailValue(e.target.value)}
                        required
                    ></input>
                    <span>E-mail:</span>
                    <i></i>
                </div>
                <div className={styles.buttons}>
                    <button  
                        id={styles.btn__send}
                        onClick={() => setIsOpenModal(true)}
                    >Enviar</button> 
                </div>
            </form>
        </section>
        <ModalComponents isOpen={isOpenModal} isClose={() => setIsOpenModal(!isOpenModal)}/>
    </main>
    )
}

export default MainComponents;