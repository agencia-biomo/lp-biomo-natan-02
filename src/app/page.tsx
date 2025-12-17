import Hero from "@/components/ui/neural-network-hero";
import { Monitor, TrendingUp, Target, MessageCircle, Shield, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative bg-black">
      {/* Hero Section with Neural Network Shader */}
      <Hero
        title="Transformamos sua presença digital em resultados reais"
        description="Agência de Marketing Digital Full Service com Garantia Total de satisfação. Sites profissionais, SEO e Tráfego Pago que convertem."
        badgeText="Marketing Digital"
        badgeLabel="Biomo"
        ctaButtons={[
          { text: "Solicitar Orçamento", href: "#contato", primary: true },
          { text: "Ver Resultados", href: "#resultados" }
        ]}
        microDetails={["+150 Projetos", "98% Satisfação", "5+ Anos"]}
      />

      {/* Services Section */}
      <section id="servicos" className="relative z-10 py-24 px-6 md:px-10 lg:px-16 bg-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
              Nossos Serviços
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light">
              Soluções completas para transformar sua presença digital e gerar resultados mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Sites Profissionais</h3>
              <p className="text-white/60 text-sm font-light mb-6 leading-relaxed">
                Sites modernos, rápidos e otimizados para converter visitantes em clientes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Design responsivo
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Otimizado para SEO
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Integração com analytics
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">SEO & Posicionamento</h3>
              <p className="text-white/60 text-sm font-light mb-6 leading-relaxed">
                Apareça no topo do Google e seja encontrado por quem procura seus serviços.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  SEO técnico e on-page
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Estratégia de conteúdo
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Link building
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Google & Meta ADS</h3>
              <p className="text-white/60 text-sm font-light mb-6 leading-relaxed">
                Campanhas de alto desempenho com ROI mensurável e otimização contínua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Google Ads
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Facebook & Instagram Ads
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Remarketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="relative z-10 py-24 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-black/95 to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
              Resultados Comprovados
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light">
              Cases de sucesso que demonstram nossa expertise em marketing digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-5xl font-extralight text-purple-400 mb-2">+150</div>
              <div className="text-white/60 text-sm">Projetos Entregues</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-5xl font-extralight text-purple-400 mb-2">98%</div>
              <div className="text-white/60 text-sm">Taxa de Satisfação</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-5xl font-extralight text-purple-400 mb-2">5+</div>
              <div className="text-white/60 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-5xl font-extralight text-purple-400 mb-2">24/7</div>
              <div className="text-white/60 text-sm">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="relative z-10 py-24 px-6 md:px-10 lg:px-16 bg-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
              Por que escolher a Biomo?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light">
              Diferenciais que fazem a diferença no seu resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-light text-white mb-3">Garantia Total</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Se não estiver satisfeito, devolvemos seu investimento. Sem burocracia.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-light text-white mb-3">Metodologia Ágil</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Entregas rápidas e iterativas. Você acompanha cada etapa do projeto.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-light text-white mb-3">Suporte Dedicado</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Equipe dedicada para atender suas necessidades a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative z-10 py-24 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-black/95 to-purple-950/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
            Pronto para começar?
          </h2>
          <p className="text-white/60 mb-10 font-light">
            Entre em contato e receba uma proposta personalizada para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-light hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@biomo.com.br"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-light hover:bg-white/10 transition-colors"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm font-light mb-2">
            © 2024 Biomo - Agência de Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
            {" | "}
            <a href="#" className="hover:text-white/60 transition-colors">Termos de Uso</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
