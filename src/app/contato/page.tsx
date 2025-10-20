"use client";
import styles from "./page.module.css";

export default function ContatosPage() {
  const telefoneExibicao = "(99) 8520-5448";
  const telefoneSomenteDigitos = "559985205448";
  const whatsUrl = `https://wa.me/${telefoneSomenteDigitos}?text=${encodeURIComponent(
    "Olá! Preciso de suporte técnico da Valenet."
  )}`;

  const lat = -7.14877827542609;
  const lng = -45.71456143889639;
  const enderecoTexto = "BR 230, Vale Verde - MA";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const appleMapsUrl = `https://maps.apple.com/?ll=${lat},${lng}`;

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contatos — Valenet</h1>
          <p className={styles.subtitle}>Atendimento técnico direto e, se desejar, presencial em nosso escritório.</p>
        </header>

        <div className={styles.stack}>
          <section className={`${styles.card} ${styles.centerCard}`}>
            <h2 className={styles.sectionTitle}>
              Atendimento técnico especializado
              <span className={styles.badge}>Melhor contato (Téc.)</span>
            </h2>
            <p className={styles.centerText}>
              Canal prioritário para contato:{" "}
              <a href={`tel:${telefoneSomenteDigitos}`} aria-label={`Ligar para ${telefoneExibicao}`}>
                {telefoneExibicao}
              </a>. Resposta rápida e direcionada ao seu caso.
            </p>
            <div className={styles.ctaRowCenter}>
              <a className={styles.btnPrimary} href={whatsUrl} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
            <p className={`${styles.note} ${styles.centerText}`}>
             Já possui contrato? Envie CPF/CNPJ e o número do contrato ao abrir o atendimento.
            </p>
          </section>

          <section className={`${styles.card} ${styles.centerCard}`}>
            <h2 className={styles.sectionTitle}>Atendimento no escritório</h2>
            <p className={`${styles.lead} ${styles.centerText}`}>
              Prefere atendimento presencial? Você pode ser atendido em nosso escritório. Para uma experiência melhor, recomendamos agendar a visita.
            </p>

            <h3 className={styles.sectionTitle}>Endereço</h3>
            <p className={`${styles.address} ${styles.centerText}`}>
              <strong>{enderecoTexto}</strong>
            </p>

            <div className={styles.ctaRowCenter}>
              <a className={styles.btnOutline} href={mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
              <a className={styles.btnOutline} href={wazeUrl} target="_blank" rel="noopener noreferrer">Waze</a>
              <a className={styles.btnOutline} href={appleMapsUrl} target="_blank" rel="noopener noreferrer">Apple Maps</a>
            </div>

            <div className={`${styles.mapBox}`}>
              <iframe
                title="Mapa Valenet"
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src={`https://www.google.com/maps?q=${lat},${lng}&hl=pt-BR&z=16&output=embed`}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
