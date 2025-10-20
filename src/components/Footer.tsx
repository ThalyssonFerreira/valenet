import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>Vale Net</h3>
            <p className={styles.brandText}>
              A qualidade faz a diferença.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navegação</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/planos">Planos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <li><Link href="/suporte">Suporte</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li><Link href="/termos">Termos de Uso</Link></li>
                <li><Link href="/privacidade">Política de Privacidade</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contato</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="https://wa.me/559985205448">(99) 8520-5448</a>
                </li>
                <li>
                  <Link href="https://wa.me/559985205448" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </Link>
                </li>
                <li>
                    <Link href="mailto:vale.nets00@gmail.com">vale.nets00@gmail.com</Link>
                </li>
                <li>
                  <Link href="/contato">Ver endereço</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Vale Net. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

