import { useState } from 'react';
import { 
  Shield, 
  Scale, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('empresarial');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const practiceAreas = {
    empresarial: {
      title: "Direito Empresarial & Societário",
      desc: "Assessoria jurídica estratégica para empresas em crescimento, reestruturações e governança corporativa.",
      items: [
        "Fusões, Aquisições e Reorganização Societária",
        "Governança Corporativa e Compliance",
        "Planejamento Sucessório e Patrimonial",
        "Contratos Empresariais Nacionais e Internacionais"
      ]
    },
    civil: {
      title: "Direito Civil & Contratos Complexos",
      desc: "Proteção patrimonial, gestão de riscos de litígios e estruturação contratual de alta complexidade.",
      items: [
        "Responsabilidade Civil e Indemnizações",
        "Direito Imobiliário e Operações Estruturadas",
        "Planejamento Sucessório e Família",
        "Disputas Contratuais e Arbitragem"
      ]
    },
    trabalhista: {
      title: "Direito Trabalhista Estratégico",
      desc: "Gestão preventiva e defesa patronal focada na redução de passivos e conformidade legal.",
      items: [
        "Consultoria Preventiva e Auditoria Trabalhista",
        "Defesa em Ações Trabalhistas Individuais e Coletivas",
        "Negociação Coletiva com Sindicatos",
        "Adequação de Políticas Internas de Recursos Humanos"
      ]
    },
    tributario: {
      title: "Direito Tributário & Fiscal",
      desc: "Otimização da carga tributária e recuperação de créditos com estrito rigor técnico.",
      items: [
        "Planejamento Tributário Nacional e Internacional",
        "Recuperação de Créditos Tributários",
        "Contencioso Administrativo e Judicial",
        "Defesa em Autos de Infração"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-[#090D16]">
      
      {/* 1. NAVBAR COM MARCA MAIOR E MENU EM LINHA DEDICADA */}
      <header className="sticky top-0 z-50 bg-[#090D16]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center justify-center space-y-4">
            
            {/* Top Row: Marca Principal */}
            <div className="flex items-center justify-between w-full md:w-auto md:justify-center relative">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded border-2 border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <Scale className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold tracking-wider bg-gradient-to-r from-amber-100 via-amber-200 to-[#D4AF37] bg-clip-text text-transparent block">
                    CANOVA & SOARES
                  </span>
                  <span className="text-xs tracking-[0.3em] uppercase text-amber-200/60 block font-light -mt-1">
                    Advocacia Estratégica
                  </span>
                </div>
              </div>

              {/* Botão Hambúrguer para Mobile */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-amber-100 hover:text-[#D4AF37] p-2"
                aria-label="Abrir Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Bottom Row: Menu em linha dedicada */}
            <nav className="hidden md:flex items-center justify-center space-x-8 pt-2 border-t border-slate-800/80 w-full max-w-4xl">
              <a href="#inicio" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">INÍCIO</a>
              <a href="#escritorio" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">O ESCRITÓRIO</a>
              <a href="#escritorio" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">SÓCIOS</a>
              <a href="#atuacao" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">ÁREAS DE ATUAÇÃO</a>
              <a href="#diferenciais" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">DIFERENCIAIS</a>
              <a href="#contato" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap">CONTATO</a>
            </nav>

          </div>

          {/* Menu Mobile Dropped */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col space-y-3 pb-2 text-center">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">INÍCIO</a>
              <a href="#escritorio" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">O ESCRITÓRIO</a>
              <a href="#sóscio" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">SÓCIOS</a>
              <a href="#atuacao" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">ÁREAS DE ATUAÇÃO</a>
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">DIFERENCIAIS</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#D4AF37] py-1 text-sm font-medium">CONTATO</a>
            </div>
          )}
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-[#090D16] to-[#090D16]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs tracking-widest uppercase mb-8">
            <Shield className="w-3.5 h-3.5" />
            <span>Escritório Canova & Soares Advocacia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-100 tracking-tight max-w-4xl mx-auto leading-tight">
            Rigidez técnica, ética e <span className="bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-300 bg-clip-text text-transparent">soluções estratégicas</span>.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Representação jurídica de alto desempenho para proteger o seu patrimônio e impulsionar os seus negócios com segurança absoluta.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#c5a028] text-[#090D16] font-semibold text-sm tracking-wider uppercase rounded shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Agendar Consulta</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#atuacao" 
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-[#D4AF37]/50 text-slate-300 hover:text-white font-medium text-sm tracking-wider uppercase rounded transition-all flex items-center justify-center"
            >
              Conhecer Especialidades
            </a>
          </div>

        </div>
      </section>

      {/* 3. METRICS / NUMBERS SECTION */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">Atendimento</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium">Personalisado</p>
            </div>
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">Rigor Técnico</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium">Análise aprofundada</p>
            </div>
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">Agilidade Digital</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium">Gestão transparente</p>
            </div>
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">Sigilo Absoluto</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium">Sigilo & Rigor</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O ESCRITÓRIO */}
      <section id="escritorio" className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">Tradição & Inovação</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mt-3 leading-tight">
                Compromisso inabalável com a defesa dos seus direitos e negócios.
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed font-light">
                O escritório Canova & Soares Advocacia foi fundado com o objetivo de oferecer serviços jurídicos corporativos e individuais de alto nível. Combinamos profunda experiência técnica com uma visão moderna do direito.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed font-light">
                Entendemos que cada demanda exige uma abordagem personalizada. Por isso, atuamos diretamente ao lado do cliente para prevenir riscos e estruturar negociações seguras.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Atendimento direto por sócios seniores</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Relatórios periódicos de acompanhamento processual</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Foco em resoluções céleres e resultados eficazes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-slate-800/80 border border-slate-700 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl" />
                <Award className="w-12 h-12 text-[#D4AF37]" />
                <blockquote className="relative z-10 text-lg font-serif text-slate-200 italic">
                  "Nossa missão é transformar desafios jurídicos complexos em soluções claras, ágeis e seguras para nossos clientes."
                </blockquote>
                <div>
                  <p className="font-semibold text-slate-100">Canova & Soares Advocacia</p>
                  <p className="text-xs text-[#D4AF37] uppercase tracking-wider">Corpo Jurídico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 4. CORPO SOCIETÁRIO / SÓCIOS */}
      <section id="socios" className="py-24 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">Liderança & Experiência</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mt-3">
              Sócios Fundadores
            </h2>
            <p className="mt-4 text-slate-400 font-light">
              Profissionais com sólida trajetória na advocacia consultiva e contenciosa de alta complexidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Sócio 1: Canova */}
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-lg text-center relative group hover:border-[#D4AF37]/50 transition-all">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-[#D4AF37]/40 mx-auto mb-6 flex items-center justify-center text-[#D4AF37] font-serif text-2xl font-bold shadow-lg">
                C
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-100">Dr. Canova</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1 mb-4 font-medium">Sócio Fundador | OAB/SP</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Especialista em Direito Empresarial e Estruturação Societária, com ampla atuação na assessoria jurídica de empresas e reestruturações corporativas.
              </p>
            </div>

            {/* Sócio 2: Soares */}
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-lg text-center relative group hover:border-[#D4AF37]/50 transition-all">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-[#D4AF37]/40 mx-auto mb-6 flex items-center justify-center text-[#D4AF37] font-serif text-2xl font-bold shadow-lg">
                S
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-100">Dra. Soares</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1 mb-4 font-medium">Sócia Fundadora | OAB/SP</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Especialista em Contratos Complexos e Contencioso Estratégico, dedicada à defesa de interesses corporativos e proteção patrimonial de alto rigor técnico.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 5. ÁREAS DE ATUAÇÃO (INTERATIVA) */}
      <section id="atuacao" className="py-24 bg-slate-900/20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">Especialidades</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mt-3">
              Áreas de Atuação Estratégica
            </h2>
            <p className="mt-4 text-slate-400 font-light">
              Selecione uma especialidade abaixo para detalhar nossas soluções jurídicas personalizadas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-slate-800 pb-4">
            {Object.keys(practiceAreas).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-all text-center rounded ${
                  activeTab === key
                    ? 'bg-[#D4AF37] text-[#090D16] shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8 bg-slate-900/60 border border-slate-800 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-amber-100 mb-3">
              {practiceAreas[activeTab].title}
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {practiceAreas[activeTab].desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practiceAreas[activeTab].items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-slate-400 text-sm">
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. FORMULÁRIO DE CONTATO & INFORMAÇÕES */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">Fale Conosco</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mt-3">
                Agende uma Consulta Institucional
              </h2>
              <p className="mt-4 text-slate-400 font-light leading-relaxed">
                Nossa equipe está pronta para avaliar a sua demanda com total confidencialidade e rigor técnico.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Telefone Directo</p>
                    <p className="text-slate-200 font-medium">(14) 3815-0000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">E-mail Institucional</p>
                    <p className="text-slate-200 font-medium">contato@canovasoares.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Endereço</p>
                    <p className="text-slate-200 font-medium">Botucatu - SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-lg shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-slate-100 font-bold">Mensagem Enviada</h3>
                  <p className="text-slate-400 text-sm mt-2">Nossa equipe entrará em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Seu nome ou Razão Social"
                      className="w-full bg-slate-800/60 border border-slate-700 rounded px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      required
                      placeholder="seu.email@empresa.com"
                      className="w-full bg-slate-800/60 border border-slate-700 rounded px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">Mensagem / Resumo da Demanda</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Descreva resumidamente a sua necessidade jurídica..."
                      className="w-full bg-slate-800/60 border border-slate-700 rounded px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#D4AF37] hover:bg-[#c5a028] text-[#090D16] font-semibold text-sm tracking-wider uppercase rounded transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 7. RODAPÉ INSTITUCIONAL */}
      <footer className="bg-[#05070D] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Scale className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-serif font-bold text-slate-200 text-sm">CANOVA & SOARES ADVOCACIA</span>
            </div>
            <p className="text-center md:text-right text-slate-500">
              © {new Date().getFullYear()} Canova & Soares Advocacia. Todos os direitos reservados.
            </p>
          </div>
          <div className="border-t border-slate-800/40 pt-4 text-center md:text-left text-slate-500 text-[11px] leading-relaxed">
            Aviso Legal: O conteúdo deste site é meramente informativo e não constitui consulta jurídica formal. Em conformidade com o Provimento nº 205/2021 da Ordem dos Advogados do Brasil (OAB).
          </div>
        </div>
      </footer>

    </div>
  );
}