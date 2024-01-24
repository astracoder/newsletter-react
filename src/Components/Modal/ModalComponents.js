import styles from './Modal.module.css';
import { IoCloseCircle } from "react-icons/io5";

const ModalComponents = ({ isOpen, isClose }) => {
    if(isOpen) {
        return (
            <div className={styles.modal}>
                <div className={styles.modal__content}>
                    <p className={styles.text__success}>Nome:</p>
                    <p className={styles.text__error}>E-mail:</p>
                    <button onClick={isClose} className={styles.btn__close}><IoCloseCircle /></button>
                </div>
            </div>
        )
    }

    return null;
}

export default ModalComponents;