import styles from './Banner.module.css'

export function Banner(){
    return(
        <div className={styles.banner}>
            <span>Telefone</span>
            <span>E-mail</span>
            <span>Instagram</span>
        </div>
    )
};