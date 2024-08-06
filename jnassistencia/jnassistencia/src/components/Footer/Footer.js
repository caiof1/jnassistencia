import styles from './Footer.module.css'

import Logo from '../../images/logo2.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <div className={styles.info}>
                <div className={styles.logo}>
                  <img src={Logo} alt="" />
                </div>
                <p>Trabalhamos com as melhores ferramentas, e temos os tecnicos mais bem graduados do mercado!</p>
                <div className={styles.redes_sociais}>
                  <i className="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-google"></i>
                </div>
            </div>
            <div className={styles.engrenagem}>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-gear"></i>
            </div>
        </section>
        <div className={styles.border}>
          <span>Desenvolvido por Caio Fernandes</span>  
        </div>
    </footer>
  )
}

export default Footer