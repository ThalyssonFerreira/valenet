"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function PlanosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual a diferença entre fibra óptica e via rádio?",
      a: "A fibra óptica utiliza cabos de vidro ultra-finos que transmitem dados através de luz, oferecendo velocidades superiores, menor latência e maior estabilidade. É ideal para streaming, jogos online e trabalho remoto. A internet via rádio transmite dados através de ondas de rádio entre antenas, sendo uma excelente opção para áreas onde a fibra ainda não chegou, com instalação rápida e bom custo-benefício."
    },
    {
      q: "Qual tecnologia é melhor para minha casa?",
      a: "Depende da sua localização e necessidades. Se você busca máxima velocidade e estabilidade para múltiplos dispositivos conectados simultaneamente, a fibra óptica é a melhor escolha. Se você está em uma área onde a fibra ainda não está disponível, a via rádio oferece uma conexão confiável e eficiente."
    },
    {
      q: "A internet via rádio funciona em dias de chuva?",
      a: "Sim, nossa infraestrutura via rádio é projetada para manter a estabilidade mesmo em condições climáticas adversas. Em casos raros de interferência extrema, a conexão pode ter pequenas variações, mas geralmente continua funcionando normalmente."
    },
    {
      q: "Posso trocar de tecnologia depois?",
      a: "Sim! Se inicialmente contratar via rádio e a fibra óptica chegar na sua região, você pode migrar para a tecnologia de fibra. Nossa equipe orienta sobre a melhor opção e facilita a transição."
    },
    {
      q: "Como sei qual velocidade preciso?",
      a: "Para uso básico (navegação, redes sociais, e-mails): 50-100 Mbps. Para streaming em HD e trabalho remoto: 100-200 Mbps. Para múltiplos dispositivos, jogos online e streaming 4K: 200-500 Mbps. Nossa equipe faz uma análise personalizada das suas necessidades."
    },
    {
      q: "Há limite de dados (franquia)?",
      a: "Não! Todos os nossos planos oferecem internet ilimitada. Você pode navegar, assistir, jogar e trabalhar sem se preocupar com limites de dados."
    }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Planos Valenet
            <span className={styles.highlight}> — Escolha a melhor tecnologia</span>
          </h1>
          <p className={styles.subtitle}>
            Oferecemos internet via fibra óptica e via rádio. Nossa equipe faz um diagnóstico personalizado para indicar a melhor solução para sua casa ou empresa.
          </p>
        </section>

        <section className={styles.technologies}>
          <h2 className={styles.sectionTitle}>Nossas Tecnologias</h2>
          <p className={styles.sectionText}>
            Duas opções de conexão, ambas com suporte especializado e sem franquia de dados.
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
              <h3 className={styles.techTitle}>Fibra Óptica</h3>
              <p className={styles.techDescription}>
                A tecnologia mais avançada disponível. Transmissão por luz através de cabos de vidro ultra-finos.
              </p>
              <ul className={styles.features}>
                <li>✓ Velocidades superiores (até 1 Gbps)</li>
                <li>✓ Latência ultra-baixa</li>
                <li>✓ Máxima estabilidade</li>
                <li>✓ Ideal para streaming 4K</li>
                <li>✓ Perfeita para jogos online</li>
                <li>✓ Suporta múltiplos dispositivos</li>
                <li>✓ Excelente para home office</li>
              </ul>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techIcon}>📡</div>
              <h3 className={styles.techTitle}>Internet Via Rádio</h3>
              <p className={styles.techDescription}>
                Conexão sem fio através de antenas. Solução eficiente para áreas onde a fibra ainda não chegou.
              </p>
              <ul className={styles.features}>
                <li>✓ Instalação rápida</li>
                <li>✓ Excelente custo-benefício</li>
                <li>✓ Disponível em áreas remotas</li>
                <li>✓ Conexão confiável</li>
                <li>✓ Ideal para uso residencial</li>
                <li>✓ Suporta streaming e videochamadas</li>
                <li>✓ Sem necessidade de cabo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Qual plano é ideal para você?</h2>
          <p className={styles.ctaText}>
            Entre em contato com nossos profissionais e faremos o melhor diagnóstico para você ou sua empresa.
          </p>
          <div className={styles.actions}>
            <a href="/contato" className={styles.btnPrimary}>Falar com especialista</a>
            <a href="/suporte" className={styles.btnSecondary}>Central de suporte</a>
          </div>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          <div className={styles.accordion}>
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    className={styles.itemButton}
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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

        <section className={styles.finalCta}>
          <h2 className={styles.finalCtaTitle}>Pronto para ter internet de qualidade?</h2>
          <p className={styles.finalCtaText}>
            Nossa equipe está pronta para encontrar a solução perfeita para suas necessidades. 
            Entre em contato e descubra como podemos melhorar sua conexão.
          </p>
          <div className={styles.actionsCenter}>
            <a href="/contato" className={styles.btnPrimary}>Contratar agora</a>
          </div>
        </section>
      </div>
    </main>
  );
}

