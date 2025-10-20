"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const faqs = [
    {
      q: "Fibra óptica ou via rádio: qual escolher?",
      a: "Se você busca maior estabilidade para streaming, jogos e trabalho remoto, a fibra óptica é ideal. Via rádio é uma opção eficiente onde a fibra ainda não chegou, com instalação rápida e bom custo-benefício.",
    },
    {
      q: "A internet via rádio é confiável?",
      a: "Sim. Com equipamentos alinhados e bom sinal entre a torre e sua residência, a experiência é consistente para navegação, aulas e videochamadas. Em cenários de muita obstrução, indicamos avaliar a fibra.",
    },
    {
      q: "Quais velocidades a Vale Net oferece?",
      a: "Trabalhamos com faixas que atendem desde uso essencial até alto desempenho. Confira detalhes e disponibilidade em Planos.",
    },
    {
      q: "Qual o prazo médio de instalação?",
      a: "Em geral, agendamos a instalação em poucos dias úteis. Em áreas com infraestrutura pronta, pode ocorrer ainda mais rápido.",
    },
    {
      q: "Como acionar o suporte?",
      a: "Abra um chamado na Central de Suporte ou fale pelo WhatsApp. Nosso time acompanha até a resolução.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Conecte-se com o futuro
              <span className={styles.highlight}> com a Vale Net</span>
            </h1>
            <p className={styles.subtitle}>
              Internet ultraveloz e estável, com suporte sempre que você precisar. Escolha o plano perfeito para sua casa ou empresa e sinta a diferença.
            </p>
            <div className={styles.actions}>
              <Link href="/planos" className={styles.btnPrimary}>Ver planos</Link>
              <Link href="/suporte" className={styles.btnSecondary}>Ir para suporte</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Soluções Vale Net</h2>
          <p className={styles.sectionText}>
            Atendemos com fibra óptica e internet via rádio. Duas tecnologias, um objetivo: sua conexão funcionando bem todos os dias.
          </p>

          <div className={styles.columns}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>
                <Image
                  src="/images/fibra.png"
                  alt="Fibra óptica"
                  width={44}
                  height={44}
                  className={styles.techIconImg}
                />
              </div>
              <h3 className={styles.techTitle}>Fibra óptica</h3>
              <ul className={styles.list}>
                <li>Altas velocidades e baixa latência.</li>
                <li>Maior estabilidade para streaming e jogos.</li>
                <li>Ideal para home office e múltiplos dispositivos.</li>
              </ul>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techIcon}>📡</div>
              <h3 className={styles.techTitle}>Internet via rádio</h3>
              <ul className={styles.list}>
                <li>Alcance em áreas onde a fibra ainda não chegou.</li>
                <li>Instalação rápida e excelente custo-benefício.</li>
                <li>Desempenho confiável com linha de visada.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.pitch}>
          <h2 className={styles.pitchTitle}>Internet lenta?</h2>
          <p className={styles.pitchText}>
            Vem pra Vale Net. Faça streaming sem travar, jogue com baixa latência e trabalhe com videochamadas estáveis.
          </p>
          <div className={styles.actionsCenter}>
            <Link href="/planos" className={styles.btnPrimary}>Contratar agora</Link>
            <Link href="/suporte" className={styles.btnOutline}>Central de suporte</Link>
          </div>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
          <div className={styles.accordion}>
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={idx} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    className={styles.itemButton}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : idx)}
                  >
                    <span>{item.q}</span>
                    <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className={styles.itemPanel} role="region">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.pitch} style={{ marginTop: "clamp(26px,4vw,48px)" } }>
          <h2 className={styles.pitchTitle}>Sentiu interesse?</h2>
          <p className={styles.pitchText}>
            Entre em contato e tire suas dúvidas. Nossa equipe orienta a melhor tecnologia para seu endereço.
          </p>
          <div className={styles.actionsCenter}>
            <a href="/contato" className={styles.btnSecondary}>Falar com a Vale Net</a>
           
          </div>
        </section>
      </div>
    </main>
  );
}
