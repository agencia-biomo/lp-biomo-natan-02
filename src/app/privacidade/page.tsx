import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Biomo",
  description: "Política de Privacidade da Biomo Soluções Digitais",
  robots: "noindex, follow",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(168,0,210,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(123,0,160,0.08)_0%,transparent_50%)] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/assets/logo-biomo-mini.svg" alt="Biomo" className="h-8 w-auto" />
            <span className="text-xl font-light tracking-wide">Biomo</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-extralight mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>
        <p className="text-white/50 text-sm mb-12 pb-6 border-b border-white/10">
          Última atualização: 19 de dezembro de 2024
        </p>

        <div className="space-y-12">
          {/* Introdução */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">Introdução</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A Biomo Soluções Digitais está empenhada em proteger a privacidade dos seus usuários. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e compartilhamos suas informações pessoais.
            </p>
            <p className="text-white/70 leading-relaxed">
              Ao acessar ou utilizar nosso website e serviços (doravante "Serviço"), você concorda com os termos desta Política de Privacidade. Se você não concordar com qualquer parte desta política, por favor, não utilize nosso Serviço.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">1. Quais informações coletamos?</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Coletamos diferentes tipos de informações para diversas finalidades, com o objetivo de fornecer e melhorar nosso Serviço, e entender as necessidades dos nossos usuários e potenciais clientes.
            </p>

            <h3 className="text-white font-medium mb-3">Informações Pessoais Identificáveis (diretas):</h3>
            <ul className="space-y-3 text-white/60 mb-6">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Dados de Contato:</strong> Nome completo, endereço de e-mail, número de telefone, nome da empresa. Coletados quando você preenche formulários de contato, de orçamento ou de solicitação de consultoria.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Dados de Comunicação:</strong> Informações que você nos fornece quando entra em contato conosco por e-mail, telefone, chat (como WhatsApp), ou através de qualquer outro meio de comunicação.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Informações de Autenticação:</strong> Credenciais de login, se você criar uma conta em nosso sistema (aplicável apenas se o Serviço incluir uma área de cliente ou similar).</span>
              </li>
            </ul>

            <h3 className="text-white font-medium mb-3">Informações de Uso e Navegação (indiretas/automáticas):</h3>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Dados de Dispositivo:</strong> Endereço IP, tipo de navegador, versão do navegador, tipo de dispositivo, identificadores únicos de dispositivo, sistema operacional, configurações de idioma.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Dados de Navegação:</strong> Páginas do nosso Serviço que você visita, tempo gasto nessas páginas, data e hora da sua visita, cliques, movimentos do mouse, scrolls, termos de pesquisa usados, tempo de resposta da página, erros de download, e outras estatísticas de diagnóstico.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Dados de Localização:</strong> Podemos usar o endereço IP para determinar uma localização aproximada (cidade, estado, país).</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">2. Como coletamos suas informações?</h2>
            <p className="text-white/70 leading-relaxed mb-4">Coletamos informações de diversas maneiras:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Diretamente de você:</strong> Quando você preenche formulários em nosso site (contato, orçamento, newsletter), interage conosco via chat, e-mail ou telefone.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Automaticamente:</strong> Através de tecnologias de rastreamento como cookies, pixels e outras tecnologias semelhantes quando você navega em nosso Serviço.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">De terceiros:</strong> Podemos receber informações de parceiros de negócios, plataformas de publicidade ou ferramentas de análise, sempre que permitido por lei.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">3. Como usamos suas informações?</h2>
            <p className="text-white/70 leading-relaxed mb-4">Utilizamos as informações coletadas para as seguintes finalidades:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Prestação e Manutenção do Serviço:</strong> Para operar, manter, proteger e fornecer nosso Serviço a você.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Comunicação:</strong> Para responder às suas solicitações, enviar atualizações, newsletters, informações de marketing e outros comunicados relevantes.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Personalização da Experiência:</strong> Para personalizar o conteúdo e as ofertas exibidas a você, com base em seus interesses e comportamento de navegação.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Marketing e Publicidade:</strong> Para realizar campanhas de marketing direcionadas e avaliar a eficácia de nossas campanhas.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Análise e Melhoria:</strong> Para analisar o desempenho do nosso Serviço e desenvolver novos serviços.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Segurança e Prevenção de Fraudes:</strong> Para detectar, prevenir e resolver problemas técnicos e atividades fraudulentas.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Cumprimento Legal:</strong> Para cumprir com obrigações legais, regulatórias ou ordens judiciais.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">4. Como suas informações são armazenadas e protegidas?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Armazenamos suas informações pessoais em servidores seguros e utilizamos medidas técnicas e organizacionais apropriadas para protegê-las contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados, firewalls e controle de acesso físico aos data centers.
            </p>
            <p className="text-white/70 leading-relaxed">
              Retemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, ou conforme exigido por lei.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">5. Compartilhamento de Informações</h2>
            <p className="text-white/70 leading-relaxed mb-4">Podemos compartilhar suas informações pessoais com terceiros nas seguintes situações:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Provedores de Serviço:</strong> Com empresas que prestam serviços em nosso nome, como hospedagem de site, análise de dados, processamento de pagamentos, atendimento ao cliente, marketing e publicidade.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Parceiros de Negócios:</strong> Com parceiros estratégicos para desenvolver produtos, serviços ou promoções conjuntas.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Transferências de Negócios:</strong> Em caso de fusão, aquisição, venda de ativos ou insolvência.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Requisitos Legais:</strong> Se formos obrigados a fazê-lo por lei, regulamento ou processo judicial.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Com seu Consentimento:</strong> Podemos compartilhar suas informações para qualquer outra finalidade com o seu consentimento explícito.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">6. Seus Direitos de Proteção de Dados</h2>
            <p className="text-white/70 leading-relaxed mb-4">De acordo com a legislação de proteção de dados aplicável (LGPD), você possui os seguintes direitos:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito de Acesso:</strong> Solicitar uma cópia das informações pessoais que mantemos sobre você.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito de Retificação:</strong> Solicitar a correção de informações incompletas ou imprecisas.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito de Exclusão:</strong> Solicitar a exclusão de suas informações pessoais sob certas condições.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito de Oposição:</strong> Opor-se ao processamento de suas informações pessoais para marketing direto ou outras finalidades.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito à Portabilidade:</strong> Solicitar a transferência de suas informações em formato legível por máquina.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Direito de Revogar o Consentimento:</strong> Retirar seu consentimento a qualquer momento.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Nosso Serviço utiliza cookies e tecnologias de rastreamento semelhantes (como Google Analytics, Google Tag Manager) para monitorar a atividade em nosso Serviço e armazenar certas informações.
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">O que são cookies?</strong> São pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a reconhecer você e a lembrar suas preferências.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Como os usamos:</strong> Para melhorar a funcionalidade do site, analisar o tráfego, personalizar conteúdo, veicular anúncios e para fins de marketing.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span><strong className="text-white/80">Como gerenciar cookies:</strong> Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado.</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">8. Alterações a Esta Política de Privacidade</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data da "Última atualização" no topo.
            </p>
            <p className="text-white/70 leading-relaxed">
              Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade são efetivas quando são publicadas nesta página.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-light text-white mb-4">9. Entre em Contato</h2>
            <p className="text-white/70 mb-4">
              Se você tiver alguma dúvida sobre esta Política de Privacidade, ou desejar exercer seus direitos de proteção de dados, entre em contato conosco:
            </p>
            <p className="text-white/60 mb-2">
              <strong className="text-white/80">Localização:</strong> Balneário Camboriú - SC, Brasil
            </p>
            <p className="text-white/60 mb-2">
              <strong className="text-white/80">Por e-mail:</strong>{" "}
              <a href="mailto:thiago@biomo.com.br" className="text-purple-400 hover:text-purple-300 transition-colors">
                thiago@biomo.com.br
              </a>
            </p>
            <p className="text-white/60 mb-2">
              <strong className="text-white/80">WhatsApp:</strong>{" "}
              <a href="https://wa.me/5547996067992" className="text-purple-400 hover:text-purple-300 transition-colors">
                (47) 99606-7992
              </a>
            </p>
            <p className="text-white/60">
              <strong className="text-white/80">Pelo nosso site:</strong>{" "}
              <Link href="/#contato" className="text-purple-400 hover:text-purple-300 transition-colors">
                Formulário de contato
              </Link>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-white/50 hover:text-purple-400 transition-colors">
              Início
            </Link>
            <Link href="/privacidade" className="text-white/50 hover:text-purple-400 transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-white/50 hover:text-purple-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
          <p className="text-white/30 text-sm">
            © 2024 Biomo Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
