import React from 'react';
import Spline from '@splinetool/react-spline';
import { 
  Droplet, 
  Bug, 
  Settings2, 
  Wrench, 
  Waves, 
  FileSignature, 
  MapPin, 
  MessageCircle,
  Phone
} from 'lucide-react';

const services = [
  {
    title: 'Desentupidora',
    icon: Droplet,
    desc: 'Desobstrução rápida e eficiente de canos, ralos e esgotos com equipamentos modernos, evitando quebras e sujeira.',
  },
  {
    title: 'Dedetizadora',
    icon: Bug,
    desc: 'Controle de pragas seguro e duradouro. Proteção completa contra insetos e roedores para sua casa ou empresa.',
  },
  {
    title: 'Manutenção de Bombas de Recalque',
    icon: Settings2,
    desc: 'Conserto, preventiva e instalação de bombas de recalque prediais e industriais. Eficiência máxima no bombeamento.',
  },
  {
    title: 'Rebobinamento de Motores',
    icon: Wrench,
    desc: 'Recuperação e rebobinamento de motores elétricos com materiais de primeira linha para maior vida útil.',
  },
  {
    title: 'Tratamento de Piscina',
    icon: Waves,
    desc: 'Limpeza e tratamento químico da água para manter sua piscina sempre cristalina e pronta para o uso.',
  },
  {
    title: 'Contratos de Manutenção',
    icon: FileSignature,
    desc: 'Planos mensais de manutenção preventiva para condomínios e empresas. Tranquilidade e economia gerantidas.',
  },
];

function App() {
  const whatsappUrl = 'https://wa.me/5513974016491';

  return (
    <div className="min-h-screen bg-dark-950 font-sans selection:bg-gold-500 selection:text-black">
      
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center glow-gold-subtle">
            <Droplet className="text-dark-950" size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Império das<span className="text-gold-400">Bombas</span></span>
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#servicos" className="text-gray-300 hover:text-gold-400 transition-colors">Serviços</a>
          <a href="#diferencial" className="text-gray-300 hover:text-gold-400 transition-colors">Diferencial</a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            <Phone size={16} />
            <span>(13) 97401-6491</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 min-h-[85vh]">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/50 border border-gold-800 text-gold-400 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            Atendimento Rápido e Especializado
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
            Soluções Especialistas em <span className="text-gradient">Bombas e Saneamento</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Manutenção de bombas de recalque, rebobinamento de motores e serviços de desentupidora com quem entende do assunto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-bold px-8 py-4 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-[0_0_30px_-5px_rgba(234,176,6,0.4)] hover:shadow-[0_0_40px_0px_rgba(234,176,6,0.6)] transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Chamar no WhatsApp
            </a>
            <a 
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-dark-900 border border-dark-800 text-white font-semibold px-8 py-4 rounded-xl hover:bg-dark-800 hover:border-gold-800 transition-all"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </div>

        {/* Right Spline 3D */}
        <div className="w-full lg:w-1/2 h-[450px] lg:h-[650px] relative mt-10 lg:mt-0 flex items-center justify-center">
          {/* Gold Glow Behind 3D */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/30 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="w-full h-full relative z-10 animate-[float_6s_ease-in-out_infinite]">
            <Spline 
              scene="https://prod.spline.design/KQE1wNp3PCFmSuvT/scene.splinecode" 
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-dark-900 relative">
        {/* Subtle top border gradient */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Excelência em <span className="text-gradient">Serviços</span></h2>
            <p className="text-gray-400 text-lg">Oferecemos um portfólio completo de serviços para garantir o perfeito funcionamento da infraestrutura do seu imóvel ou condomínio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-dark-950 border border-dark-800 p-8 rounded-2xl hover:border-gold-800 transition-all hover:shadow-[0_0_40px_-15px_rgba(234,176,6,0.15)] flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 group-hover:bg-gold-950/50 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section id="diferencial" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-900/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-600/10 blur-[150px] rounded-full pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-dark-900 to-dark-950 border border-gold-900/30 rounded-[2rem] p-8 lg:p-16 gap-12 shadow-[inset_0_0_80px_rgba(234,176,6,0.05)]">
            
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-gold-500 text-dark-950 flex items-center justify-center mb-8 glow-gold-subtle transform -rotate-6">
                <MapPin size={32} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Especialistas na <span className="text-gradient">Baixada Santista</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Temos orgulho de ser a referência técnica na Baixada Santista. Conhecemos as particularidades da nossa região, como os efeitos da maresia e as demandas específicas de condomínios do litoral. Estamos sempre perto para resolver seu problema com agilidade.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Atendimento Ágil', 'Equipe Local Treinada', 'Conhecimento da Região', 'Logística Facilitada'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gold-500 text-gold-500 font-bold px-8 py-4 rounded-xl hover:bg-gold-500 hover:text-dark-950 transition-all w-full sm:w-auto"
              >
                Solicite uma Visita Técnica
              </a>
            </div>

            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-square max-w-[400px] mx-auto relative group">
                  <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50 duration-500"></div>
                  <div className="absolute inset-4 bg-dark-950 border border-gold-900 rounded-full flex flex-col items-center justify-center z-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-2xl"></div>
                    <MapPin className="text-gold-500 mb-4" size={64} strokeWidth={1.5} />
                    <span className="text-2xl font-bold text-white text-center px-6">Atuando forte<br/>no litoral.</span>
                    <span className="text-gold-400 mt-2 font-medium">Desde Santos até Peruíbe</span>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-dark-800 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Droplet className="text-gold-500" size={20} />
            <span className="text-lg font-bold tracking-tight text-white">Império das<span className="text-gold-400">Bombas</span></span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Império das Bombas. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
