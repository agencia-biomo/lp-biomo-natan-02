"use client";

import { useState, useEffect } from "react";
import { X, Zap, TrendingUp, Rocket, ChevronLeft, ChevronRight, Plus, Minus, Check, MessageCircle, HelpCircle } from "lucide-react";

// ==================== DADOS ====================
const PLANS = {
  landing: {
    id: "landing",
    label: "Landing Page",
    base: 993,
    pagesIncluded: 1,
    icon: Zap,
    help: "Uma página única com uma proposta clara, prova social e um botão para falar com você.",
    details: "Incluso: 1 seção hero, 3 seções de benefícios, 1 call-to-action com WhatsApp, rodapé.",
  },
  institucional: {
    id: "institucional",
    label: "Site Institucional",
    base: 3491,
    pagesIncluded: 6,
    icon: TrendingUp,
    help: "Um site completo com as páginas essenciais para gerar confiança e explicar seu serviço.",
    details: "Incluso: Até 6 páginas (Home, Sobre, Serviços, Blog, Contato, Políticas).",
  },
  premium: {
    id: "premium",
    label: "Site Enterprise + Intranet",
    base: 5994,
    pagesIncluded: 6,
    includes: ["tracking_avancado", "crm"],
    icon: Rocket,
    help: "A solução completa para escalar com segurança, incluindo dashboards, CRM e integrações.",
    details: "Incluso: Múltiplas páginas, dashboards internos, CRM e integrações avançadas.",
  },
};

const ADDONS = {
  // Conteúdo
  extraPage: { label: "Páginas extras", type: "counter", unit: 293, category: "conteudo", help: "Adiciona uma nova página completa ao site." },
  copywriting: { label: "Copywriting", type: "counter", unit: 114, category: "conteudo", help: "Redação de texto otimizado em SEO e persuasão." },
  imagensPremium: { label: "Pacote de Imagem Premium", type: "counter", unit: 143, category: "conteudo", help: "Até 10 imagens exclusivas em alta qualidade." },
  // Módulos
  blog: { label: "Blog", type: "toggle", setup: 491, category: "modulos", includedIn: ["institucional", "premium"], help: "Publique artigos e suba no Google." },
  portfolio: { label: "Portfólio/Cases", type: "toggle", setup: 594, category: "modulos", includedIn: ["premium"], help: "Mostre trabalhos com fotos e filtros." },
  team: { label: "Página de Equipe", type: "toggle", setup: 289, category: "modulos", help: "Apresente as pessoas por trás da marca." },
  testimonials: { label: "Sessão de Depoimentos", type: "toggle", setup: 294, category: "modulos", help: "Prova social que vende." },
  catalogo: { label: "Catálogo de Produtos", type: "toggle", setup: 943, category: "modulos", help: "Área para exibir produtos com fotos e categorias." },
  calculadora: { label: "Calculadora/Orçamento", type: "toggle", setup: 891, category: "modulos", help: "O cliente simula preço e te manda o lead." },
  agenda: { label: "Sistema de Agendamento", type: "toggle", setup: 683, category: "modulos", help: "O cliente escolhe dia/horário." },
  multilanguage: { label: "Site Multilíngue", type: "toggle", setup: 991, category: "modulos", help: "Seu site em mais de um idioma." },
  // Visibilidade (SEO & Marketing)
  seo_avancado: { label: "SEO Avançado", type: "toggle", setup: 1483, category: "visibilidade", help: "Otimização completa para máximo desempenho orgânico." },
  tracking_avancado: { label: "Rastreamento Avançado", type: "toggle", setup: 684, category: "visibilidade", includedIn: ["premium"], help: "Coleta avançada de dados dos visitantes." },
  // Automação
  crm: { label: "Integração com CRM", type: "toggle", setup: 583, category: "automacao", includedIn: ["premium"], help: "CRM próprio sob medida para sua operação." },
  chatbot_site: { label: "Chatbot no Site", type: "toggle", setup: 481, category: "automacao", help: "Chatbot para automatizar respostas e capturar leads." },
  agent_ia_whatsapp: { label: "Agent IA para WhatsApp", type: "toggle", setup: 0, category: "automacao", customPriceLabel: "A consultar", help: "IA avançada para WhatsApp. Valor: R$ 1.193 a R$ 2.491 + mensalidade." },
  // Gestão (Backend)
  backend_padrao: { label: "Back-end Padrão", type: "toggle", setup: 793, category: "gestao", includedIn: ["premium"], help: "Painel para gerenciar conteúdos básicos do site." },
  backend_custom: { label: "Back-end Personalizado", type: "range", min: 1491, category: "gestao", help: "Campos específicos, regras, automações, dashboards." },
};

const RECURRING = {
  host_essencial: { label: "Essencial - Compartilhada", monthly: 53, help: "SSL, backups semanais, uptime monitorado." },
  host_performance: { label: "Performance (Ideal para tráfego pago)", monthly: 143, help: "CDN, backups diários, anti-bot, servidores rápidos." },
  manutencao_2h: { label: "Plano de Manutenção", monthly: 241, help: "2h/mês para ajustes e atualizações." },
};

// Nova estrutura de 5 passos
const STEPS = [
  { title: "Escolha seu Plano", type: "plans" },
  {
    title: "Personalização",
    type: "tabs",
    tabs: [
      { id: "conteudo", label: "Conteúdo" },
      { id: "modulos", label: "Módulos" },
    ]
  },
  {
    title: "Marketing & Backend",
    type: "tabs",
    tabs: [
      { id: "visibilidade", label: "Visibilidade" },
      { id: "automacao", label: "Automação" },
      { id: "gestao", label: "Gestão" },
    ]
  },
  { title: "Hospedagem & Manutenção", type: "recurring" },
  { title: "Finalizar Orçamento", type: "final" },
];

// ==================== COMPONENTE ====================
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("conteudo");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [addons, setAddons] = useState<Record<string, number | boolean>>({});
  const [recurring, setRecurring] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Calcular preço
  const calculatePrice = () => {
    if (!selectedPlan) return { setup: 0, monthly: 0 };

    let setup = PLANS[selectedPlan as keyof typeof PLANS].base;
    let monthly = 0;
    const plan = PLANS[selectedPlan as keyof typeof PLANS];
    const includedAddons = (plan as any).includes || [];

    Object.keys(addons).forEach((key) => {
      const addon = ADDONS[key as keyof typeof ADDONS];
      const value = addons[key];
      const isIncluded = (addon as any).includedIn?.includes(selectedPlan) || includedAddons.includes(key);

      if (addon.type === "counter" && typeof value === "number" && value > 0) {
        setup += (addon as any).unit * value;
      } else if (addon.type === "toggle" && value && !isIncluded) {
        if ((addon as any).setup !== undefined) setup += (addon as any).setup;
      } else if (addon.type === "range" && typeof value === "number" && value > 0) {
        setup += value;
      }
    });

    Object.keys(recurring).forEach((key) => {
      if (recurring[key]) {
        monthly += RECURRING[key as keyof typeof RECURRING].monthly;
      }
    });

    return { setup, monthly };
  };

  const { setup, monthly } = calculatePrice();

  // Validação
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.length < 2) newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Formatar telefone
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  // Gerar mensagem WhatsApp
  const generateWhatsAppMessage = () => {
    const planLabel = selectedPlan ? PLANS[selectedPlan as keyof typeof PLANS].label : "";
    let msg = `Olá! Gostaria de finalizar meu orçamento para um site. 🚀\n\n`;
    msg += `*Meu nome:* ${formData.name}\n`;
    msg += `*Email:* ${formData.email}\n`;
    if (formData.phone) msg += `*Telefone:* ${formData.phone}\n`;
    msg += `*Plano escolhido:* ${planLabel}\n`;
    msg += `*Valor estimado:* R$ ${setup.toLocaleString("pt-BR")} (setup)`;
    if (monthly > 0) msg += ` + R$ ${monthly}/mês`;
    msg += `\n\nPodemos conversar sobre os detalhes? 😊`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppClick = () => {
    if (!validateForm()) return;
    const url = `https://wa.me/5547996067992?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    onClose();
  };

  // LocalStorage - Salvar progresso
  useEffect(() => {
    if (isOpen && selectedPlan) {
      localStorage.setItem('biomo_quote_draft', JSON.stringify({
        step,
        selectedPlan,
        addons,
        recurring,
        formData,
        timestamp: Date.now()
      }));
    }
  }, [isOpen, step, selectedPlan, addons, recurring, formData]);

  // LocalStorage - Recuperar ao abrir
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('biomo_quote_draft');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          // Expiração de 24h
          if (Date.now() - data.timestamp < 86400000) {
            setStep(data.step || 0);
            setSelectedPlan(data.selectedPlan);
            setAddons(data.addons || {});
            setRecurring(data.recurring || {});
            setFormData(data.formData || { name: "", email: "", phone: "", message: "" });
          } else {
            localStorage.removeItem('biomo_quote_draft');
          }
        } catch (e) {
          localStorage.removeItem('biomo_quote_draft');
        }
      }
    }
  }, [isOpen]);

  // Reset ao fechar com sucesso
  const handleClose = () => {
    onClose();
  };

  // Limpar draft ao finalizar
  const handleFinalize = () => {
    if (!validateForm()) return;
    localStorage.removeItem('biomo_quote_draft');
    const url = `https://wa.me/5547996067992?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    onClose();
  };

  // Verificar se addon está incluído no plano
  const isAddonIncluded = (addonKey: string) => {
    if (!selectedPlan) return false;
    const addon = ADDONS[addonKey as keyof typeof ADDONS];
    const plan = PLANS[selectedPlan as keyof typeof PLANS];
    const includedAddons = (plan as any).includes || [];
    return (addon as any).includedIn?.includes(selectedPlan) || includedAddons.includes(addonKey);
  };

  // Obter addons por categoria
  const getAddonsByCategory = (category: string) => {
    return Object.entries(ADDONS).filter(([_, addon]) => (addon as any).category === category);
  };

  // Atualizar tab ao mudar de step
  useEffect(() => {
    const currentStep = STEPS[step];
    if (currentStep.type === "tabs" && currentStep.tabs) {
      setActiveTab(currentStep.tabs[0].id);
    }
  }, [step]);

  // Renderizar addon
  const renderAddon = (addonKey: string, addon: typeof ADDONS[keyof typeof ADDONS]) => {
    const included = isAddonIncluded(addonKey);
    const value = addons[addonKey];

    return (
      <div
        key={addonKey}
        className={`p-4 rounded-xl border transition-all ${
          included
            ? "border-green-500/30 bg-green-500/10"
            : value
            ? "border-purple-500/30 bg-purple-500/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-white font-medium truncate">{addon.label}</span>
            <button
              onClick={() => setShowTooltip(showTooltip === addonKey ? null : addonKey)}
              className="p-1 rounded-full hover:bg-white/10 flex-shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-white/40" />
            </button>
            {included && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 flex-shrink-0">
                Incluso
              </span>
            )}
          </div>

          {/* Counter */}
          {addon.type === "counter" && (
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">R$ {(addon as any).unit}/un</span>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() =>
                    setAddons({ ...addons, [addonKey]: Math.max(0, ((value as number) || 0) - 1) })
                  }
                  className="p-1 rounded hover:bg-white/10"
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <span className="text-white w-8 text-center">{(value as number) || 0}</span>
                <button
                  onClick={() => setAddons({ ...addons, [addonKey]: ((value as number) || 0) + 1 })}
                  className="p-1 rounded hover:bg-white/10"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Toggle */}
          {addon.type === "toggle" && !included && (
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">
                {(addon as any).customPriceLabel || `R$ ${(addon as any).setup}`}
              </span>
              <button
                onClick={() => setAddons({ ...addons, [addonKey]: !value })}
                className={`w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                  value ? "bg-purple-500" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    value ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          )}

          {/* Range */}
          {addon.type === "range" && (
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">Mín: R$ {(addon as any).min}</span>
              <input
                type="number"
                min={(addon as any).min}
                step={100}
                value={(value as number) || ""}
                onChange={(e) => setAddons({ ...addons, [addonKey]: parseInt(e.target.value) || 0 })}
                placeholder={(addon as any).min}
                className="w-28 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
              />
            </div>
          )}
        </div>

        {/* Tooltip */}
        {showTooltip === addonKey && (
          <p className="mt-3 text-white/60 text-sm bg-white/5 p-3 rounded-lg">{addon.help}</p>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  const currentStep = STEPS[step];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-xl font-light text-white">Orçamento Personalizado</h2>
            <p className="text-white/50 text-sm mt-1">{currentStep.title}</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-white/40">Passo {step + 1} de {STEPS.length}</span>
            <span className="text-xs text-purple-400">{Math.round(((step + 1) / STEPS.length) * 100)}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 0: Planos */}
          {currentStep.type === "plans" && (
            <div className="space-y-4">
              {Object.values(PLANS).map((plan) => {
                const Icon = plan.icon;
                const isSelected = selectedPlan === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${isSelected ? "bg-purple-500" : "bg-white/10"}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white">{plan.label}</h3>
                          <span className="text-purple-400 font-semibold">
                            R$ {plan.base.toLocaleString("pt-BR")}
                          </span>
                        </div>
                        <p className="text-white/50 text-sm mt-1">{plan.help}</p>
                        <p className="text-white/30 text-xs mt-2">{plan.details}</p>
                      </div>
                      {isSelected && (
                        <div className="p-1 rounded-full bg-purple-500">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Steps com Tabs */}
          {currentStep.type === "tabs" && currentStep.tabs && (
            <div className="space-y-4">
              {/* Tab Navigation */}
              <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                {currentStep.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-purple-500 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-3">
                {getAddonsByCategory(activeTab).map(([key, addon]) => renderAddon(key, addon))}
              </div>
            </div>
          )}

          {/* Step: Recurring */}
          {currentStep.type === "recurring" && (
            <div className="space-y-4">
              {Object.entries(RECURRING).map(([key, service]) => {
                const isSelected = recurring[key];
                return (
                  <button
                    key={key}
                    onClick={() => setRecurring({ ...recurring, [key]: !isSelected })}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected ? "border-purple-500/30 bg-purple-500/10" : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{service.label}</h4>
                        <p className="text-white/50 text-sm mt-1">{service.help}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 font-semibold">R$ {service.monthly}/mês</span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected ? "border-purple-500 bg-purple-500" : "border-white/30"
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step: Final */}
          {currentStep.type === "final" && (
            <div className="space-y-6">
              {/* Resumo */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <h4 className="text-white font-medium mb-3">Resumo do Orçamento</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Plano:</span>
                    <span className="text-white">
                      {selectedPlan ? PLANS[selectedPlan as keyof typeof PLANS].label : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Setup:</span>
                    <span className="text-purple-400 font-semibold">R$ {setup.toLocaleString("pt-BR")}</span>
                  </div>
                  {monthly > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/60">Mensalidade:</span>
                      <span className="text-purple-400 font-semibold">R$ {monthly}/mês</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Formulário */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Nome *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } text-white placeholder-white/30 focus:outline-none focus:border-purple-500`}
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } text-white placeholder-white/30 focus:outline-none focus:border-purple-500`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">WhatsApp (opcional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500"
                    placeholder="(47) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Mensagem (opcional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 resize-none"
                    placeholder="Conte um pouco sobre seu projeto..."
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black/50">
          {/* Resumo flutuante */}
          {step > 0 && step < 4 && selectedPlan && (
            <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-white/5">
              <span className="text-white/60 text-sm">
                {PLANS[selectedPlan as keyof typeof PLANS].label}
              </span>
              <div className="text-right">
                <span className="text-purple-400 font-semibold">R$ {setup.toLocaleString("pt-BR")}</span>
                {monthly > 0 && <span className="text-white/40 text-sm ml-2">+ R$ {monthly}/mês</span>}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-4">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Voltar
              </button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 0 && !selectedPlan}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continuar
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinalize}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
