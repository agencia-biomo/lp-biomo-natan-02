import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Biomo",
  description: "Termos de Uso da Biomo Soluções Digitais",
  robots: "noindex, follow",
};

export default function TermosPage() {
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
          Termos de Uso
        </h1>
        <p className="text-white/50 text-sm mb-12 pb-6 border-b border-white/10">
          Última atualização: 19 de dezembro de 2024
        </p>

        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Bem-vindo ao site da Biomo Soluções Digitais. Ao acessar e utilizar nosso website e serviços (doravante "Serviço"), você concorda em estar vinculado a estes Termos de Uso e à nossa Política de Privacidade.
            </p>
            <p className="text-white/70 leading-relaxed">
              Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nosso Serviço. A utilização continuada do Serviço constitui aceitação de quaisquer alterações ou modificações feitas a estes Termos de Uso.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">2. Descrição do Serviço</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A Biomo Soluções Digitais é uma agência de marketing digital que oferece os seguintes serviços:
            </p>
            <ul className="space-y-3 text-white/60 mb-4">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Criação e desenvolvimento de websites profissionais</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Otimização para mecanismos de busca (SEO)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Gestão de campanhas de tráfego pago (Google Ads, Meta Ads)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Consultoria em marketing digital</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Análise de dados e métricas</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Design gráfico e identidade visual</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              Os serviços específicos, prazos e valores serão definidos em propostas comerciais e contratos individuais para cada projeto.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">3. Uso do Website</h2>
            <p className="text-white/70 leading-relaxed mb-4">Ao utilizar nosso website, você concorda em:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Fornecer informações verdadeiras, precisas e completas quando solicitado</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Manter a confidencialidade de qualquer informação de acesso que possa ser fornecida</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Não utilizar o Serviço para fins ilegais ou não autorizados</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Não tentar acessar áreas restritas do website sem autorização</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Não transmitir vírus, malware ou qualquer código de natureza destrutiva</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Não coletar informações de outros usuários sem consentimento</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">4. Propriedade Intelectual</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Todo o conteúdo presente neste website, incluindo mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Biomo Soluções Digitais ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">Você não pode:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Reproduzir, duplicar, copiar, vender ou explorar qualquer parte do Serviço sem autorização expressa</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Utilizar nossa marca, logotipo ou outros elementos visuais sem permissão prévia por escrito</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Modificar ou criar trabalhos derivados baseados no conteúdo do website</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">5. Contratação de Serviços</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A contratação de serviços da Biomo Soluções Digitais será formalizada através de propostas comerciais e/ou contratos específicos, que estabelecerão:
            </p>
            <ul className="space-y-3 text-white/60 mb-4">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Escopo detalhado dos serviços a serem prestados</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Prazos de entrega e cronograma de execução</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Valores, formas e condições de pagamento</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Responsabilidades de cada parte</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Condições de cancelamento e reembolso</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Garantias aplicáveis</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              Os orçamentos solicitados através do website são estimativas iniciais e podem variar após análise detalhada do projeto.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-white/70 leading-relaxed mb-4">A Biomo Soluções Digitais não será responsável por:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso do Serviço</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Interrupções temporárias no acesso ao website por motivos técnicos ou de manutenção</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Conteúdo de sites de terceiros que possam ser acessados através de links em nosso website</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Resultados específicos de campanhas de marketing, uma vez que estes dependem de diversos fatores externos</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Alterações em políticas de plataformas de terceiros (Google, Meta, etc.) que possam afetar campanhas em andamento</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">7. Garantias</h2>
            <p className="text-white/70 leading-relaxed mb-4">A Biomo Soluções Digitais se compromete a:</p>
            <ul className="space-y-3 text-white/60 mb-4">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Prestar os serviços contratados com profissionalismo e qualidade</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Manter sigilo sobre informações confidenciais dos clientes</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Comunicar de forma transparente o andamento dos projetos</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Oferecer suporte técnico conforme definido em contrato</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              Garantias específicas de satisfação ou resultados serão detalhadas nos contratos individuais de prestação de serviços.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">8. Comunicações</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Ao fornecer seu e-mail ou telefone através de nossos formulários, você concorda em receber comunicações da Biomo Soluções Digitais relacionadas a:
            </p>
            <ul className="space-y-3 text-white/60 mb-4">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Respostas às suas solicitações de contato ou orçamento</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Informações sobre serviços e novidades (mediante seu consentimento)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <span>Atualizações sobre projetos em andamento</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              Você pode cancelar o recebimento de comunicações de marketing a qualquer momento através do link de descadastro presente nos e-mails ou entrando em contato conosco diretamente.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">9. Modificações dos Termos</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Reservamo-nos o direito de modificar ou substituir estes Termos de Uso a qualquer momento. Mudanças significativas serão notificadas através do website. A continuidade do uso do Serviço após tais modificações constitui sua aceitação dos novos termos.
            </p>
            <p className="text-white/70 leading-relaxed">
              Recomendamos que você revise estes Termos de Uso periodicamente para estar ciente de quaisquer alterações.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-light text-purple-300 mb-4">10. Lei Aplicável e Foro</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, independentemente de conflitos de disposições legais.
            </p>
            <p className="text-white/70 leading-relaxed">
              Qualquer disputa decorrente destes termos será submetida ao foro da comarca de São Paulo/SP, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-light text-white mb-4">11. Contato</h2>
            <p className="text-white/70 mb-4">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
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
