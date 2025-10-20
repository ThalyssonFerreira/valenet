"use client";
import styles from "./page.module.css";

export default function SuportePage() {
  const telefoneSomenteDigitos = "559985205448";
  const whatsUrl = `https://wa.me/${telefoneSomenteDigitos}?text=${encodeURIComponent(
    "Olá! Preciso de suporte técnico da Valenet."
  )}`;

  const dicasUteis = [
    {
      icon: "🔌",
      titulo: "Reinicie o roteador",
      descricao: "Desligue o equipamento por 30 segundos e ligue novamente. Isso resolve a maioria dos problemas de conexão."
    },
    {
      icon: "💡",
      titulo: "Verifique as luzes",
      descricao: "Confirme se todas as luzes do roteador estão acesas corretamente. Luzes piscando podem indicar problema."
    },
    {
      icon: "🔌",
      titulo: "Teste o cabo de energia",
      descricao: "Verifique se o cabo de energia está bem conectado na tomada e no roteador."
    },
    {
      icon: "📡",
      titulo: "Posição do roteador",
      descricao: "Certifique-se de que o roteador está em local elevado e sem obstruções para melhor sinal."
    },
    {
      icon: "🔄",
      titulo: "Reinicie o dispositivo",
      descricao: "Desligue e ligue seu computador, celular ou tablet. Às vezes o problema está no dispositivo."
    },
    {
      icon: "📶",
      titulo: "Verifique outros dispositivos",
      descricao: "Teste a internet em outro dispositivo para identificar se o problema é geral ou específico."
    }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Central de Suporte
            <span className={styles.highlight}> — Estamos aqui para ajudar</span>
          </h1>
          <p className={styles.subtitle}>
            Nossa equipe de suporte técnico está pronta para resolver qualquer problema. 
            Antes de entrar em contato, confira as dicas úteis abaixo.
          </p>
        </section>

        <section className={styles.horario}>
          <h2 className={styles.sectionTitle}>Horário de Atendimento</h2>
          <div className={styles.horarioGrid}>
            <div className={styles.horarioCard}>
              <div className={styles.horarioIcon}>📅</div>
              <h3 className={styles.horarioDia}>Segunda a Sexta</h3>
              <p className={styles.horarioHoras}>8h às 18h</p>
            </div>
            <div className={styles.horarioCard}>
              <div className={styles.horarioIcon}>📅</div>
              <h3 className={styles.horarioDia}>Sábado</h3>
              <p className={styles.horarioHoras}>8h às 12h</p>
            </div>
          </div>
        </section>

        <section className={styles.dicas}>
          <h2 className={styles.sectionTitle}>Dicas Úteis</h2>
          <p className={styles.sectionText}>
            Antes de entrar em contato, tente estas soluções rápidas que resolvem a maioria dos problemas:
          </p>

          <div className={styles.dicasGrid}>
            {dicasUteis.map((dica, idx) => (
              <div key={idx} className={styles.dicaCard}>
                <div className={styles.dicaIcon}>{dica.icon}</div>
                <h3 className={styles.dicaTitulo}>{dica.titulo}</h3>
                <p className={styles.dicaDescricao}>{dica.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contato}>
          <h2 className={styles.contatoTitle}>Ainda precisa de ajuda?</h2>
          <p className={styles.contatoText}>
            Nossa equipe técnica está pronta para resolver seu problema. Entre em contato pelo WhatsApp 
            e receba atendimento especializado.
          </p>
          <div className={styles.actionsCenter}>
            <a href={whatsUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Falar com Suporte
            </a>
          </div>
          <p className={styles.note}>
            💡 Dica: Ao entrar em contato, informe seu CPF/CNPJ e número do contrato para um atendimento mais rápido.
          </p>
        </section>

        <section className={styles.outrosContatos}>
          <h2 className={styles.sectionTitle}>Outras formas de contato</h2>
          <div className={styles.outrosGrid}>
            <div className={styles.outroCard}>
              <div className={styles.outroIcon}>📞</div>
              <h3 className={styles.outroTitulo}>Telefone</h3>
              <p className={styles.outroTexto}>
                Ligue diretamente para nossa equipe técnica
              </p>
              <a href={`tel:${telefoneSomenteDigitos}`} className={styles.outroLink}>
                (99) 8520-5448
              </a>
            </div>
            <div className={styles.outroCard}>
              <div className={styles.outroIcon}>📍</div>
              <h3 className={styles.outroTitulo}>Atendimento Presencial</h3>
              <p className={styles.outroTexto}>
                Visite nosso escritório em Vale Verde - MA
              </p>
              <a href="/contato" className={styles.outroLink}>
                Ver endereço
              </a>
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Suporte</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqPergunta}>Quanto tempo leva para resolver um problema?</h3>
              <p className={styles.faqResposta}>
                A maioria dos problemas é resolvida em até 24 horas. Para casos mais complexos, nossa equipe mantém você informado sobre o progresso.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqPergunta}>Preciso estar em casa para receber suporte?</h3>
              <p className={styles.faqResposta}>
                Depende do problema. Muitas questões podem ser resolvidas remotamente. Se necessário, agendamos uma visita técnica.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqPergunta}>Como posso acompanhar meu chamado?</h3>
              <p className={styles.faqResposta}>
                Nossa equipe mantém contato via WhatsApp durante todo o processo de resolução. Você será informado em tempo real.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqPergunta}>O suporte tem custo adicional?</h3>
              <p className={styles.faqResposta}>
                Não! O suporte técnico está incluído em todos os planos. Você não paga nada extra para resolver problemas de conexão.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

