import styles from "./page.module.css";

export const metadata = {
  title: "Política de Privacidade — Valenet",
  description: "Política de privacidade e proteção de dados da Valenet.",
};

export default function PrivacidadePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.subtitle}>
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introdução</h2>
            <p>
              A <strong>Valenet</strong> ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e os dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações:</p>
            <ul>
              <li><strong>Dados de Contato:</strong> Nome, telefone, endereço de e-mail</li>
              <li><strong>Dados de Identificação:</strong> CPF ou CNPJ</li>
              <li><strong>Dados de Localização:</strong> Endereço completo para instalação e cobrança</li>
              <li><strong>Dados de Navegação:</strong> Informações sobre como você interage com nosso site</li>
              <li><strong>Dados de Serviço:</strong> Histórico de contratos, chamados de suporte e interações</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Como Coletamos Informações</h2>
            <p>Coletamos informações através de:</p>
            <ul>
              <li>Formulários de contratação de serviços</li>
              <li>Comunicação via WhatsApp, telefone ou e-mail</li>
              <li>Visitas técnicas e atendimento presencial</li>
              <li>Navegação em nosso site</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Uso das Informações</h2>
            <p>Utilizamos suas informações pessoais para:</p>
            <ul>
              <li>Prestar e gerenciar nossos serviços de internet</li>
              <li>Processar pagamentos e emitir notas fiscais</li>
              <li>Prestar suporte técnico e atendimento ao cliente</li>
              <li>Enviar comunicações sobre serviços, manutenções e atualizações</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Compartilhamento de Dados</h2>
            <p>Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com:</p>
            <ul>
              <li>Prestadores de serviços que nos auxiliam nas operações (processamento de pagamentos, hospedagem, etc.)</li>
              <li>Autoridades competentes quando exigido por lei</li>
              <li>Empresas parceiras com seu consentimento explícito</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controle de acesso e monitoramento regular de nossos sistemas.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política ou conforme exigido por lei. Após o término da relação contratual, podemos reter certos dados por períodos específicos para cumprimento de obrigações legais.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Seus Direitos (LGPD)</h2>
            <p>Você tem os seguintes direitos:</p>
            <ul>
              <li><strong>Acesso:</strong> Solicitar acesso aos seus dados pessoais</li>
              <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
              <li><strong>Exclusão:</strong> Solicitar exclusão de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Solicitar portabilidade de seus dados</li>
              <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
              <li><strong>Informação:</strong> Obter informações sobre compartilhamento de dados</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Links para Sites Externos</h2>
            <p>
              Nosso site pode conter links para sites externos (como Google Maps). Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Menores de Idade</h2>
            <p>
              Nossos serviços são destinados a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de menores de idade. Se tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas para excluir essas informações.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas através de nosso site ou por e-mail. Recomendamos que você revise esta política regularmente.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className={styles.contactBox}>
              <p><strong>Valenet</strong></p>
              <p>BR 230, Vale Verde - MA</p>
              <p>Telefone: (99) 8520-5448</p>
              <p>E-mail: contato@valenet.com.br</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Encarregado de Dados (DPO)</h2>
            <p>
              Nomeado um Encarregado de Proteção de Dados (DPO) conforme exigido pela LGPD. Para contato direto com o DPO, utilize o e-mail: dpo@valenet.com.br
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

