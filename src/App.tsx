import { useEffect, useState, useRef, useCallback } from 'react'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function MapPinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function CheckIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function StarIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

function MenuIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  )
}

function SendIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-11 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  )
}

function ArrowUpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5 12 12 5 19 12"/>
    </svg>
  )
}

function UsersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

const WA = 'https://wa.me/551334812824?text=Olá! Vim pelo site e gostaria de um orçamento.'
const TEL = 'tel:+551334812824'
const TEL2 = 'tel:+5513988364002'
const INSTA = 'https://www.instagram.com/imperio.bombas/'
const FACE = 'https://www.facebook.com/Imperiodasbombas/'
const EMAIL = 'mailto:imperio.bombas2016@gmail.com'

function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

const SERVICES = [
  { img: '/images/desentupimento.png', name: 'Desentupimento', desc: 'Pias, vasos, ralos, colunas, esgotos e fossas. Equipamento moderno e resolução rápida.' },
  { img: '/images/dedetizacao.png', name: 'Dedetização', desc: 'Baratas, ratos, formigas, cupins e escorpiões. Produtos certificados pela ANVISA.' },
  { img: '/images/bombas.png', name: 'Bombas e Recalque', desc: 'Instalação, manutenção e reparo de bombas d\'água, recalque e sistemas hidráulicos.' },
  { img: '/images/caixa_agua.png', name: 'Limpeza de Caixa d\'Água', desc: 'Higienização completa com certificado. Água limpa e sem riscos para sua família.' },
  { img: '/images/fossa.png', name: 'Limpeza de Fossa', desc: 'Limpeza de fossa séptica e caixa de gordura com destinação ambiental correta.' },
  { img: '/images/preventivo.png', name: 'Contrato Preventivo', desc: 'Manutenção periódica para empresas e condomínios. Economia e segurança o ano todo.' },
]

const DIFFS = [
  { icon: <ClockIcon size={22} />, title: 'Atendimento 24h', desc: 'Disponíveis todos os dias, inclusive feriados. Emergências resolvidas rapidamente.' },
  { icon: <CheckIcon size={22} />, title: 'Técnicos Certificados', desc: 'Profissionais treinados e capacitados com equipamentos de última geração.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Garantia por Escrito', desc: 'Todo serviço realizado tem garantia documentada e suporte pós-atendimento.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>, title: 'Orçamento Transparente', desc: 'Sem taxas ocultas. Você só autoriza depois de saber o valor exato.' },
  { icon: <UsersIcon size={22} />, title: '+5.000 Clientes', desc: 'Mais de uma década atendendo com excelência residências, empresas e indústrias.' },
  { icon: <MapPinIcon size={22} />, title: 'Cobertura Regional', desc: 'Toda a Baixada Santista e Litoral Sul atendidos com equipes distribuídas estrategicamente.' },
]

const AREAS = [
  { name: 'Praia Grande', hq: true },
  { name: 'Santos', hq: false },
  { name: 'São Vicente', hq: false },
  { name: 'Cubatão', hq: false },
  { name: 'Guarujá', hq: false },
  { name: 'Mongaguá', hq: false },
  { name: 'Itanhaém', hq: false },
]

const TESTIMONIALS = [
  { name: 'Carlos Andrade', city: 'Praia Grande', text: 'Serviço rápido e profissional. Resolveram o entupimento em menos de 1 hora. Recomendo de olhos fechados!' },
  { name: 'Fernanda Lima', city: 'Santos', text: 'Contratei a dedetização para meu apartamento. Equipe pontual, educada e o serviço ficou impecável. Nota 10!' },
  { name: 'João Ribeiro', city: 'São Vicente', text: 'Problema na bomba de recalque resolvido no mesmo dia. Preço justo e garantia por escrito. Muito obrigado!' },
]

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'areas', label: 'Áreas' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', servico: '', mensagem: '' })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setShowBackToTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const goWA = useCallback(() => window.open(WA, '_blank'), [])
  const callTel = useCallback(() => window.open(TEL, '_self'), [])
  const scrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [])

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Me chamo ${form.nome}. Telefone: ${form.telefone}. Serviço: ${form.servico}. ${form.mensagem}`
    window.open(`https://wa.me/5513974016491?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div>
      {/* ═══ FLOAT WHATSAPP ═══ */}
      <button onClick={goWA} className="float-wa" aria-label="WhatsApp">
        <WhatsAppIcon size={24} />
      </button>

      {/* ═══ BACK TO TOP ═══ */}
      <button
        onClick={scrollTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUpIcon size={18} />
      </button>

      {/* ═══ HEADER ═══ */}
      <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="container header-inner">
          <a href="#hero" className="header-logo">
            <img src="/images/Design sem nome (1).jpg" alt="Império das Bombas" className="header-logo-img" />
            Império<span> das Bombas</span>
          </a>

          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href={WA} target="_blank" rel="noreferrer" className="header-cta">
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>

          <button className="header-mobile-btn" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            <MenuIcon size={20} />
          </button>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="hero">
        {/* Orbs animados */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        {/* Partículas douradas flutuantes */}
        {[...Array(10)].map((_, i) => <div key={i} className="hero-particle" />)}

        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Atendimento 24h · Emergência
            </div>

            <h1>
              Soluções profissionais em <span>bombas, desentupimento</span> e dedetização
            </h1>

            <p>
              Técnicos especializados em Praia Grande e toda a Baixada Santista. 
              Atendimento 24h, orçamento gratuito e garantia por escrito em todos os serviços.
            </p>

            <div className="hero-actions">
              <button onClick={goWA} className="btn btn-primary btn-lg">
                <WhatsAppIcon size={18} />
                Chamar no WhatsApp
              </button>
              <button onClick={callTel} className="btn btn-outline btn-lg">
                <PhoneIcon size={18} />
                (13) 3481-2824
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-val">18+</div>
                <div className="hero-stat-lbl">Anos de experiência</div>
              </div>
              <div className="hero-stat-sep" />
              <div>
                <div className="hero-stat-val">5.000+</div>
                <div className="hero-stat-lbl">Clientes atendidos</div>
              </div>
              <div className="hero-stat-sep" />
              <div>
                <div className="hero-stat-val">98%</div>
                <div className="hero-stat-lbl">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img src="/images/hero-tecnico-real.png" alt="Técnico Império das Bombas em atendimento" />
            </div>
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-avatar">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="hero-card-info">
                  <p className="hero-card-title">Atendimento 24h</p>
                  <span>Online agora · Respondemos em minutos</span>
                </div>
                <div className="hero-card-status">Online</div>
              </div>

              <div className="hero-card-list">
                <div className="hero-card-item">
                  <div className="hero-card-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"/></svg>
                  </div>
                  Orçamento grátis sem compromisso
                </div>
                <div className="hero-card-item">
                  <div className="hero-card-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  Garantia por escrito em todo serviço
                </div>
                <div className="hero-card-item">
                  <div className="hero-card-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  Chegamos em até 30 min na emergência
                </div>
              </div>

              <a href={WA} target="_blank" rel="noreferrer" className="hero-card-wa">
                <WhatsAppIcon size={18} />
                Fale conosco pelo WhatsApp
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <div className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <strong>Emergência?</strong> Atendemos em até 30 min
          </div>
          <div className="trust-item">
            <ClockIcon size={16} />
            <strong>24h</strong> todos os dias, inclusive feriados
          </div>
          <div className="trust-item">
            <CheckIcon size={16} />
            <strong>Orçamento</strong> 100% grátis e sem compromisso
          </div>
        </div>
      </div>

      {/* ═══ TRANSIÇÃO ═══ */}
      <div className="section-transition" />

      {/* ═══ ABOUT ═══ */}
      <section id="sobre" className="watermark-section">
        <div className="container">
          <div className="about-grid">
            {/* FOTO à esquerda — estilo Pipefix */}
            <ScrollReveal>
              <div className="about-photo-wrap">
                <div className="about-photo">
                  <img src="/images/sobre-equipe.jpg" alt="Equipe técnica Império das Bombas" />
                </div>
                <div className="about-stats-row">
                  <div className="about-stat-box">
                    <div className="about-num-val">18+</div>
                    <div className="about-num-lbl">Anos de Experiência</div>
                  </div>
                  <div className="about-stat-box">
                    <div className="about-num-val">5K+</div>
                    <div className="about-num-lbl">Clientes Atendidos</div>
                  </div>
                  <div className="about-stat-box">
                    <div className="about-num-val">98%</div>
                    <div className="about-num-lbl">Satisfação</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* TEXTO à direita */}
            <ScrollReveal>
              <div className="section-label">Sobre Nós</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: '1rem' }}>
                Anos de Experiência, Milhares de Clientes Satisfeitos
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A <strong>Império das Bombas</strong> atua há mais de 18 anos oferecendo soluções profissionais em
                desentupimento, dedetização, limpeza técnica e manutenção hidráulica. Trabalhamos com equipamentos
                modernos, equipe especializada e emitimos relatórios técnicos, certificados de execução dos serviços
                e garantias por escrito, proporcionando segurança e tranquilidade aos nossos clientes.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Nosso objetivo é oferecer soluções eficientes, seguras e duradouras, mantendo elevados padrões
                de qualidade, respeito ao cliente e responsabilidade técnica em todos os serviços executados.
              </p>
              <div className="about-features">
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"/></svg>, text: 'Equipamentos modernos e certificados' },
                  { icon: <CheckIcon size={18} />, text: 'Técnicos treinados e certificados' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, text: 'Garantia por escrito em todos os serviços' },
                  { icon: <ClockIcon size={18} />, text: 'Atendimento 24h · 7 dias por semana' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.38 2 2 0 0 1 3.05 1.17h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, text: 'Orçamento 100% grátis e sem compromisso' },
                ].map((f, i) => (
                  <div key={i} className="about-feature-item">
                    <div className="about-feature-icon">{f.icon}</div>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>

              <button onClick={goWA} className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>
                <WhatsAppIcon size={18} />
                Fale com um especialista
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="servicos" className="watermark-section">
        <div className="container">
          <ScrollReveal className="section-header">
            <div className="section-label">Nossos Serviços</div>
            <h2 className="section-title">Tudo que você precisa em um só lugar</h2>
            <p className="section-desc">Soluções completas em bombas, desentupimento, dedetização e manutenção para residências, empresas e condomínios.</p>
          </ScrollReveal>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.name} className={`reveal-delay-${Math.min(i, 3)}`}>
                <div className="service-card">
                  <div className="service-card-img"><img src={s.img} alt={s.name} /></div>
                  <div className="service-card-body">
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <button onClick={goWA} className="service-card-link">
                      Solicitar orçamento <ArrowRightIcon size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIALS ═══ — split layout estilo Pipefix */}
      <section id="diferenciais" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="diffs-split">
            {/* Lado esquerdo — imagem */}
            <ScrollReveal className="diffs-image-side">
              <div className="diffs-image-wrap">
                <img src="/images/marketing (2).png" alt="Império das Bombas" className="diffs-image" />
                <div className="diffs-image-badge">
                  <div className="diffs-badge-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"/></svg>
                  </div>
                  <div>
                    <div className="diffs-badge-val">98%</div>
                    <div className="diffs-badge-lbl">Satisfação garantida</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Lado direito — features */}
            <ScrollReveal className="diffs-content-side">
              <div className="section-label">Diferenciais</div>
              <h2 className="section-title">A escolha perfeita para quem precisa de qualidade</h2>
              <p className="section-desc" style={{ marginBottom: '2rem' }}>
                Mais de 18 anos de excelência, com milhares de clientes satisfeitos em toda a Baixada Santista.
              </p>

              <div className="diffs-feature-list">
                {DIFFS.map((d) => (
                  <div key={d.title} className="diffs-feature-item">
                    <div className="diffs-feature-icon">{d.icon}</div>
                    <div>
                      <h4 className="diffs-feature-title">{d.title}</h4>
                      <p className="diffs-feature-desc">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ AREAS ═══ */}
      <section id="areas" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <ScrollReveal className="section-header">
            <div className="section-label">Áreas de Atendimento</div>
            <h2 className="section-title">Atendemos toda a Baixada Santista</h2>
            <p className="section-desc">Equipes distribuídas estrategicamente para chegar até você com rapidez e eficiência.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="areas-list">
              {AREAS.map(a => (
                <span key={a.name} className={`areas-tag ${a.hq ? 'areas-tag-hq' : ''}`}>
                  <MapPinIcon size={14} />
                  {a.name}
                  {a.hq && <span className="areas-tag-badge">Sede</span>}
                </span>
              ))}
            </div>
            <p className="areas-more">Além de outras cidades da região mediante consulta.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ — estilo Pipefix "Precisa de ajuda?" */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-split">
              <div className="cta-split-text">
                <div className="section-label" style={{ color: 'rgba(201,149,42,0.85)' }}>Atendimento imediato</div>
                <h2>Problema urgente? <br/>Chame agora mesmo!</h2>
                <p>Atendemos emergências em até 30 minutos. Orçamento grátis, sem compromisso, disponíveis 24 horas todos os dias.</p>
              </div>
              <div className="cta-split-actions">
                <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                  <WhatsAppIcon size={18} />
                  Chamar no WhatsApp
                </a>
                <a href={TEL} className="btn btn-outline btn-lg">
                  <PhoneIcon size={18} />
                  (13) 3481-2824
                </a>
                <div className="cta-trust-items">
                  <span><CheckIcon size={14} /> Orçamento grátis</span>
                  <span><CheckIcon size={14} /> Resposta em minutos</span>
                  <span><CheckIcon size={14} /> Garantia por escrito</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ DOCUMENTAÇÃO ═══ */}
      <section id="documentacao" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <ScrollReveal className="section-header">
            <div className="section-label">Documentação</div>
            <h2 className="section-title">Documentação e Certificação</h2>
            <p className="section-desc">Após a execução dos serviços, disponibilizamos documentação completa conforme a necessidade do cliente.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="doc-grid">
              {[
                'Certificado de Limpeza e Higienização de Caixa d\'Água',
                'Certificado de Dedetização e Controle de Pragas',
                'Relatórios Técnicos com Fotos e Vídeos',
                'Comprovantes de Execução dos Serviços',
                'Garantias por Escrito',
              ].map((item, i) => (
                <div key={i} className="doc-item">
                  <div className="doc-item-icon"><CheckIcon size={20} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="doc-note">Documentação ideal para <strong>condomínios, empresas, comércios, escolas, clínicas</strong> e demais estabelecimentos que necessitam comprovar a realização dos serviços.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="depoimentos" className="watermark-section">
        <div className="container">
          <ScrollReveal className="section-header">
            <div className="section-label">Depoimentos</div>
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <p className="section-desc">A satisfação dos nossos clientes é o nosso maior reconhecimento.</p>
          </ScrollReveal>

          <div className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} className={`reveal-delay-${Math.min(i, 2)}`}>
                <div className="test-card">
                  <div className="test-stars">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} size={16} />)}
                  </div>
                  <p className="test-text">"{t.text}"</p>
                  <div className="test-author">
                    <div className="test-avatar"><UsersIcon size={18} /></div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-city">{t.city}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contato" className="watermark-section">
        <div className="container">
          <ScrollReveal className="section-header">
            <div className="section-label">Fale Conosco</div>
            <h2 className="section-title">Entre em contato</h2>
            <p className="section-desc">Estamos prontos para atender você. Solicite seu orçamento grátis agora.</p>
          </ScrollReveal>

          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-form">
                <h3>Enviar mensagem</h3>
                <form onSubmit={submitForm}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contato-nome">Seu nome</label>
                      <input id="contato-nome" name="nome" type="text" placeholder="João Silva" value={form.nome} onChange={e => setForm(p => ({ ...p, nome: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contato-telefone">Telefone / WhatsApp</label>
                      <input id="contato-telefone" name="telefone" type="tel" placeholder="(13) 9xxxx-xxxx" value={form.telefone} onChange={e => setForm(p => ({ ...p, telefone: e.target.value }))} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contato-servico">Tipo de serviço</label>
                    <select id="contato-servico" name="servico" value={form.servico} onChange={e => setForm(p => ({ ...p, servico: e.target.value }))} required>
                      <option value="">Selecione...</option>
                      <option>Desentupimento</option>
                      <option>Dedetização</option>
                      <option>Bomba de recalque</option>
                      <option>Limpeza de caixa d'água</option>
                      <option>Limpeza de fossa</option>
                      <option>Contrato preventivo</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contato-mensagem">Descreva o problema</label>
                    <textarea id="contato-mensagem" name="mensagem" placeholder="Conte mais detalhes sobre o que precisa..." value={form.mensagem} onChange={e => setForm(p => ({ ...p, mensagem: e.target.value }))} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <SendIcon size={17} />
                    Enviar pelo WhatsApp
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="contact-info">
                <h3>Informações de Contato</h3>
                <p>Prefere falar diretamente? Estamos disponíveis 24 horas, 7 dias por semana.</p>

                <div className="contact-compact">
                  <a href={WA} target="_blank" rel="noreferrer" className="contact-compact-item">
                    <WhatsAppIcon size={18} />
                    <span>(13) 3481-2824</span>
                  </a>
                  <a href={TEL} className="contact-compact-item">
                    <PhoneIcon size={18} />
                    <span>(13) 3481-2824</span>
                  </a>
                  <a href={EMAIL} className="contact-compact-item">
                    <MailIcon size={18} />
                    <span>imperio.bombas2016@gmail.com</span>
                  </a>
                  <div className="contact-compact-item">
                    <MapPinIcon size={18} />
                    <span>Av. do Trabalhador, 3378 - Vila Sonia, Praia Grande - SP</span>
                  </div>
                  <div className="contact-compact-item">
                    <ClockIcon size={18} />
                    <span>24h · 7 dias por semana · Feriados</span>
                  </div>
                </div>

                <div className="contact-socials">
                  <a href={INSTA} target="_blank" rel="noreferrer" className="contact-social contact-social-insta" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href={FACE} target="_blank" rel="noreferrer" className="contact-social contact-social-face" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href={WA} target="_blank" rel="noreferrer" className="contact-social contact-social-wa" aria-label="WhatsApp">
                    <WhatsAppIcon size={18} />
                  </a>
                </div>

                <div className="map-container map-container-compact">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.928880689149!2d-46.4230444!3d-23.9651484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c3afdbad0f3%3A0xd3c15b7d8e5b2c7d!2sAv.%20do%20Trabalhador%2C%203378%20-%20Vila%20Sonia%2C%20Praia%20Grande%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa - Império das Bombas"
                    allowFullScreen
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <img src="/images/Design sem nome (1).jpg" alt="Império das Bombas" className="header-logo-img" />
                Império<span> das Bombas</span>
              </div>
              <p className="footer-desc">
                Especialistas em bombas, desentupimento, dedetização e manutenção hidráulica. 
                Atendimento 24h em Praia Grande e toda a Baixada Santista.
              </p>
            </div>

            <div>
              <h4>Serviços</h4>
              <div className="footer-links">
                <a href="#servicos">Desentupimento</a>
                <a href="#servicos">Dedetização</a>
                <a href="#servicos">Bombas e Recalque</a>
                <a href="#servicos">Caixa d'água</a>
                <a href="#servicos">Fossa e gordura</a>
                <a href="#servicos">Preventivo</a>
              </div>
            </div>

            <div>
              <h4>Empresa</h4>
              <div className="footer-links">
                <a href="#sobre">Sobre nós</a>
                <a href="#diferenciais">Diferenciais</a>
                <a href="#areas">Áreas atendidas</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#contato">Orçamento grátis</a>
              </div>
            </div>

            <div>
              <h4>Contato</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <MapPinIcon size={15} />
                  <span>Av. do Trabalhador, 3378<br />Vila Sonia, Praia Grande - SP</span>
                </div>
                <a href={TEL} className="footer-contact-item">
                  <PhoneIcon size={15} /><span>(13) 3481-2824</span>
                </a>
                <a href={TEL2} className="footer-contact-item">
                  <PhoneIcon size={15} /><span>(13) 98836-4002</span>
                </a>
                <a href={WA} target="_blank" rel="noreferrer" className="footer-contact-item">
                  <WhatsAppIcon size={15} /><span>(13) 3481-2824</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Império das Bombas. Todos os direitos reservados.</span>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#hero">Início</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
