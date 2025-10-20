import styles from "./page.module.css";

export const metadata = {
  title: "Termos de Uso — Vale Net",
  description: "Termos e condições de uso dos serviços da Vale Net.",
};

export default function TermosPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Termos de Uso</h1>
          <p className={styles.subtitle}>
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da <strong>Vale Net</strong>(&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Descrição dos Serviços</h2>
            <p>
              A Vale Net oferece serviços de internet banda larga através de tecnologias de fibra óptica e via rádio, incluindo:
            </p>
            <ul>
              <li>Internet banda larga residencial e empresarial</li>
              <li>Suporte técnico especializado</li>
              <li>Instalação e manutenção de equipamentos</li>
              <li>Atendimento ao cliente</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Contratação e Pagamento</h2>
            <h3 className={styles.subsectionTitle}>3.1. Contratação</h3>
            <p>
              A contratação dos serviços é formalizada mediante assinatura de contrato, que estabelece as condições específicas, incluindo plano, velocidade, valor e prazo de vigência.
            </p>
            
            <h3 className={styles.subsectionTitle}>3.2. Pagamento</h3>
            <p>
              Os valores dos serviços devem ser pagos mensalmente, conforme estabelecido no contrato. O não pagamento pode resultar na suspensão ou cancelamento do serviço, conforme previsto em contrato.
            </p>
            
            <h3 className={styles.subsectionTitle}>3.3. Reajustes</h3>
            <p>
              Os valores podem ser reajustados anualmente com base em índices oficiais de inflação, conforme previsto em contrato e na legislação vigente.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Uso do Serviço</h2>
            <h3 className={styles.subsectionTitle}>4.1. Uso Permitido</h3>
            <p>Você concorda em utilizar o serviço de forma responsável e legal, incluindo:</p>
            <ul>
              <li>Respeitar as leis e regulamentações aplicáveis</li>
              <li>Não utilizar o serviço para atividades ilegais</li>
              <li>Não interferir ou prejudicar o funcionamento da rede</li>
              <li>Não compartilhar sua conexão sem autorização</li>
              <li>Não realizar atividades que violem direitos de terceiros</li>
            </ul>

            <h3 className={styles.subsectionTitle}>4.2. Uso Proibido</h3>
            <p>É expressamente proibido:</p>
            <ul>
              <li>Transmitir conteúdo ilegal, ofensivo ou prejudicial</li>
              <li>Realizar ataques cibernéticos ou atividades maliciosas</li>
              <li>Violar direitos autorais ou propriedade intelectual</li>
              <li>Distribuir spam, vírus ou malware</li>
              <li>Realizar atividades que sobrecarreguem a rede</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Velocidade e Disponibilidade</h2>
            <p>
              A Vale Net se compromete a fornecer o melhor serviço possível, porém:
            </p>
            <ul>
              <li>A velocidade pode variar devido a fatores técnicos, climáticos ou de rede</li>
              <li>Podem ocorrer interrupções temporárias para manutenção</li>
              <li>Eventos de força maior podem afetar a disponibilidade</li>
              <li>A velocidade é medida em condições ideais de rede</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Instalação e Equipamentos</h2>
            <h3 className={styles.subsectionTitle}>6.1. Instalação</h3>
            <p>
              A instalação será agendada conforme disponibilidade. O cliente deve garantir acesso ao local de instalação e fornecer as informações necessárias.
            </p>

            <h3 className={styles.subsectionTitle}>6.2. Equipamentos</h3>
            <p>
              Os equipamentos fornecidos pela Vale Net permanecem de propriedade da empresa. O cliente é responsável pelo cuidado adequado dos equipamentos e deve reportar qualquer dano ou defeito.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Suporte Técnico</h2>
            <p>
              Oferecemos suporte técnico durante os horários estabelecidos:
            </p>
            <ul>
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
            </ul>
            <p>
              Para suporte, entre em contato através dos canais oficiais: WhatsApp, telefone ou e-mail.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Cancelamento</h2>
            <h3 className={styles.subsectionTitle}>8.1. Cancelamento pelo Cliente</h3>
            <p>
              O cliente pode solicitar o cancelamento a qualquer momento, observando as condições contratuais, incluindo possíveis multas ou taxas de cancelamento.
            </p>

            <h3 className={styles.subsectionTitle}>8.2. Cancelamento pela Vale Net</h3>
            <p>
              Podemos cancelar o serviço em caso de:
            </p>
            <ul>
              <li>Descumprimento de obrigações contratuais</li>
              <li>Uso inadequado ou ilegal do serviço</li>
              <li>Inadimplência prolongada</li>
              <li>Violação destes Termos de Uso</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Limitação de Responsabilidade</h2>
            <p>
              A Vale Net não será responsável por:
            </p>
            <ul>
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Perda de dados ou informações</li>
              <li>Interrupções causadas por eventos de força maior</li>
              <li>Danos resultantes de uso inadequado do serviço</li>
              <li>Atividades de terceiros não controladas pela empresa</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, é propriedade da Vale Net e protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização prévia.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Privacidade e Proteção de Dados</h2>
            <p>
              O tratamento de dados pessoais é realizado em conformidade com a Lei Geral de Proteção de Dados (LGPD) e nossa Política de Privacidade. Para mais informações, consulte nossa página de Política de Privacidade.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas aos clientes. O uso continuado dos serviços após as modificações constitui aceitação dos novos termos.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Lei Aplicável e Jurisdição</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes da comarca de Imperatriz - MA, renunciando as partes a qualquer outro foro, por mais privilegiado que seja.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Disposições Gerais</h2>
            <p>
              Se qualquer disposição destes termos for considerada inválida, as demais disposições permanecerão em pleno vigor. A tolerância com descumprimento não constitui renúncia de direitos.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>15. Contato</h2>
            <p>
              Para questões sobre estes Termos de Uso, entre em contato:
            </p>
            <div className={styles.contactBox}>
              <p><strong>Vale Net</strong></p>
              <p>BR 230, Vale Verde - MA</p>
              <p>Telefone: (99) 8520-5448</p>
              <p>E-mail: vale.nets00@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

