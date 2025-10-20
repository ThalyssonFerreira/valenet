import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Sobre a Vale Net</h1>
        <p className={styles.subtitle}>
          Conectando pessoas e empresas com internet de qualidade.
          Nossa missão é levar tecnologia de ponta com suporte humano.
        </p>
      </section>
      <section className={styles.missao}>
        <h2 className={styles.sectionTitle}>Nossa Missão</h2>
        <p className={styles.sectionText}>Prover conexão rápida, estável e segura, garantindo satisfação e confiança para nossos clientes.</p>
      </section>
      <section className={styles.valores}>
        <h2 className={styles.sectionTitle}>Nossos Valores</h2>
        <div className={styles.cards}>
          <div className={styles.card}><div className={styles.icon}>💡</div><strong>Inovação</strong><p>Estamos sempre atualizados com tecnologia.</p></div>
          <div className={styles.card}><div className={styles.icon}>🤝</div><strong>Confiança</strong><p>Compromisso com transparência e respeito aos clientes.</p></div>
          <div className={styles.card}><div className={styles.icon}>⚡</div><strong>Agilidade</strong><p>Instalação rápida e suporte eficiente.</p></div>
        </div>
      </section>
    </main>
  );
}
