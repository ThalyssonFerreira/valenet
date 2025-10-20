import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Vale Net — página inicial">
          <Image
            src="/logo.png"           
            alt="Logo Vale Net"
            className={styles.logo}
            width={32}                
            height={32}
            priority
          />
          <span className={styles.brandName}>Vale Net</span>
        </Link>

        <nav className={styles.nav}>
          <Link className={styles.link} href="/">Início</Link>
          <Link className={styles.link} href="/planos">Planos</Link>
          <Link className={styles.link} href="/suporte">Suporte</Link>
          <Link className={styles.link} href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
