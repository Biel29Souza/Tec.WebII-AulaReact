import styles from './Header.module.css';

function Header(){
    return(
        //conteudo de exibição
        //JSX - HTML + xml (html com css dentro do js)
        <header className={styles.header}>
            <span> Aula Senac</span>
            <nav>
                <a href="#"> Home</a>
                <a href="#"> Senac</a>
            </nav>
        </header>
    )
}

export default Header;