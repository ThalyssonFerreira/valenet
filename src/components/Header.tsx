"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/planos", label: "Planos" },
  { href: "/suporte", label: "Suporte" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();

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

        <nav className={styles.nav} aria-label="Principal">
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
