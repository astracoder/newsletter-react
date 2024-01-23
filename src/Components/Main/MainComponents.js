import styles from './Main.module.css';

const MainComponents = () => {
  return (
    <main className={styles.main}>
        <section className={styles.main__content}>
            <h2>Seja bem-vindo a sua melhor newsletter</h2>
            <h3>Fique por dentro de todas as novidades</h3>
            <p>Preecha os campos para receber as notificações</p>
            <form className={styles.form} action="#">
                <div className={styles.inputs}>
                    <input type="text" name="name" id={styles.input__name} required></input>
                    <span>Nome:</span>
                    <i></i>
                </div>
                <div className={styles.inputs}>
                    <input type="email" name="email" id={styles.input__email} required></input>
                    <span>E-mail:</span>
                    <i></i>
                </div>
                <div className={styles.buttons}>
                    <button type="submit" id={styles.btn__send}>Enviar</button> 
                </div>
            </form>
        </section>
    </main>
    )
}

export default MainComponents;