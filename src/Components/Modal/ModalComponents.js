import styles from './Modal.module.css';

import { IoCloseCircle } from "react-icons/io5";

const ModalComponents = () => {
    return (
        <dialog className={styles.modal} open>
            <div className={styles.modal__content}>
                <p className={styles.text__success}>E-mail cadastrado com <span>sucesso!</span></p>
                <p className={styles.text__error}>E-mail <span>não</span> cadastrado!</p>
                <button className={styles.btn__close}><IoCloseCircle /></button>
            </div>
        </dialog>
    )
}

export default ModalComponents;