import styles from './Modal.module.css';
import { IoCloseCircle } from "react-icons/io5";

const ModalComponents = ({ name, email, isOpen, isClose, isSuccess }) => {
    if(isOpen) {
        return (
            <div className={styles.modal}>
                <div className={styles.modal__content}>
                    {isSuccess && <p className={styles.text__success}>{name} seu e-mail foi cadastrado com <span>sucesso!</span><span className={styles.text__success_email}>{email}</span></p>}
                    {!isSuccess && <p className={styles.text__error}>Usuário <span>não</span> cadastrado!<span className={styles.text__error_user}>Preencha os campos NOME e E-MAIL!</span></p>}
                    <button onClick={isClose} className={styles.btn__close}><IoCloseCircle /></button>
                </div>
            </div>
        )
    }

    return null;
}

export default ModalComponents;