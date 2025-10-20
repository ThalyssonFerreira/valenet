import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>Valenet</h3>
            <p className={styles.brandText}>
              Conectando pessoas e empresas com internet de qualidade.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navegação</h4>
              <ul className={styles.linkList}>
                <li><a href="/">Início</a></li>
                <li><a href="/planos">Planos</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/suporte">Suporte</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li><a href="/termos">Termos de Uso</a></li>
                <li><a href="/privacidade">Política de Privacidade</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contato</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="tel:559985205448">(99) 8520-5448</a>
                </li>
                <li>
                  <a href="https://wa.me/559985205448" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="/contato">Ver endereço</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Valenet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

