import styles from './Navbar.module.css';
import senacLogo from '../../assets/senac1.png'; 

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><img src={senacLogo} alt="Logo" /></li>
        <li>Sobre nós</li>
        <li>Contato</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
}
