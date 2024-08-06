import styles from './Header.module.css';

import Logo from '../../images/logo.jpeg'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.circle}></div>
        <div className={styles.logo}>
            <img src={Logo} alt="" />
        </div>
    </header>
  )
}

export default Header