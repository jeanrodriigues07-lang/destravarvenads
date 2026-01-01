
import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Lock, 
  Rocket, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Smartphone, 
  Laptop, 
  Brain, 
  ArrowRight,
  ShieldCheck,
  Zap,
  PlayCircle
} from 'lucide-react';
import { Button } from './components/Button';
import { FAQItem } from './types';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "O curso serve para quem é totalmente iniciante?",
      answer: "Sim! O método foi desenhado exatamente para quem está começando do zero absoluto e não entende nada de ferramentas complexas."
    },
    {
      question: "Já tentei outros cursos e não vendi. Por que esse seria diferente?",
      answer: "A maioria dos cursos foca em teoria. Nós focamos no processo prático de destravar. Você não vai aprender 'clique aqui', vai aprender a lógica de venda que funciona em qualquer nicho."
    },
    {
      question: "R$ 47 por tudo isso? Tem alguma pegadinha?",
      answer: "Nenhuma pegadinha. Esse é o nosso 'produto de entrada'. Queremos que você tenha resultados rápidos gastando pouco para que futuramente queira avançar em nossos treinamentos mais caros. É uma relação ganha-ganha."
    },
    {
      question: "Quanto tempo tenho de acesso?",
      answer: "O acesso é imediato e vitalício. Você pode assistir as aulas quando quiser, de onde quiser, para sempre."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#00E676] selection:text-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2979FF] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#00E676] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-blue-500/30 text-[#2979FF] text-sm font-bold mb-8 animate-float">
            <Zap size={16} /> 2025: O MÉTODO OTIMIZADO PARA CONVERSÃO
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            DESTRAVE SUAS VENDAS NO <br />
            <span className="text-gradient-blue">MARKETING DIGITAL</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            O passo a passo prático para iniciantes e afiliados que cansaram de gastar em tráfego sem ver o retorno cair na conta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 p-4 glass-card rounded-2xl">
              <div className="p-2 bg-[#00E676]/10 rounded-lg text-[#00E676]">
                <DollarSign size={24} />
              </div>
              <span className="font-semibold text-gray-200">Vendas Diárias</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-card rounded-2xl">
              <div className="p-2 bg-[#2979FF]/10 rounded-lg text-[#2979FF]">
                <TrendingUp size={24} />
              </div>
              <span className="font-semibold text-gray-200">Escala de Lucro</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-card rounded-2xl">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Lock size={24} />
              </div>
              <span className="font-semibold text-gray-200">Destrave Garantido</span>
            </div>
          </div>

          <Button className="w-full md:w-auto px-12 text-xl">
            QUERO ACESSAR AGORA POR R$ 47 <ArrowRight size={24} />
          </Button>
          
          <p className="mt-4 text-gray-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck size={16} /> Pagamento 100% seguro via Kiwify
          </p>
        </div>
      </section>

      {/* Impact Block */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0B0E14] to-[#1a212e] rounded-3xl p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Um investimento menor que uma pizza 🍕</h2>
            <p className="text-gray-400">Tenha acesso vitalício a um conteúdo que vale centenas de reais por um preço simbólico.</p>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <span className="text-sm text-gray-500 line-through">De R$ 197,00</span>
            <span className="text-5xl font-black text-[#00E676]">R$ 47</span>
            <span className="text-xs text-[#2979FF] font-bold">ACESSO IMEDIATO</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">TUDO O QUE VOCÊ PRECISA PARA <span className="text-[#00E676]">COMECAR</span> JÁ ESTÁ AQUI</h2>
            <p className="text-gray-400 text-lg">Direto ao ponto, sem enrolação e sem encher linguiça.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-colors group">
              <PlayCircle className="text-[#00E676] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 text-white">Aulas Gravadas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Assista no seu tempo, quantas vezes quiser. Passo a passo do zero.</p>
            </div>
            <div className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-colors group">
              <Smartphone className="text-[#2979FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 text-white">Mobile & PC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Plataforma otimizada para você estudar pelo celular ou computador.</p>
            </div>
            <div className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-colors group">
              <Brain className="text-[#00E676] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 text-white">Método Lógico</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Aprenda a pensar como um estrategista, não apenas como um apertador de botões.</p>
            </div>
            <div className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-colors group">
              <Rocket className="text-[#2979FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 text-white">Foco em Vendas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Nosso único objetivo é fazer você destravar as primeiras vendas e escalar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">O QUE VOCÊ VAI <span className="text-[#2979FF]">DOMINAR</span></h2>
          <div className="space-y-4">
            {[
              "Parar de queimar dinheiro em campanhas de tráfego que não convertem",
              "Entender o processo completo da jornada de compra do cliente",
              "Criar ofertas que são impossíveis de serem ignoradas",
              "Montar sua estrutura de vendas mesmo com pouco capital",
              "Dominar a psicologia por trás do clique"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 glass-card rounded-2xl border-l-4 border-[#00E676]">
                <CheckCircle2 className="text-[#00E676] shrink-0" />
                <span className="text-gray-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0B0E14] to-[#0d1117]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-green-500/5 border border-green-500/10">
            <h3 className="text-2xl font-black text-[#00E676] mb-6 flex items-center gap-3">
              <CheckCircle2 /> PARA QUEM É
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">• Iniciantes que não sabem por onde começar</li>
              <li className="flex items-start gap-2">• Afiliados que estão com as vendas travadas</li>
              <li className="flex items-start gap-2">• Gestores que querem melhorar o ROI de seus clientes</li>
              <li className="flex items-start gap-2">• Quem busca um método sério e testado</li>
            </ul>
          </div>
          <div className="p-10 rounded-[40px] bg-red-500/5 border border-red-500/10 opacity-70">
            <h3 className="text-2xl font-black text-red-500 mb-6 flex items-center gap-3">
              <XCircle /> NÃO É PARA QUEM
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">• Busca dinheiro fácil sem esforço</li>
              <li className="flex items-start gap-2">• Acha que é apenas 'apertar botões'</li>
              <li className="flex items-start gap-2">• Não está disposto a aplicar o conteúdo</li>
              <li className="flex items-start gap-2">• Busca fórmulas mágicas milagrosas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emotional Identification */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#2979FF] font-bold text-sm tracking-widest uppercase mb-4 block">Sentindo-se Perdido?</span>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">VOCÊ ESTÁ CANSADO DE TENTAR, TENTAR E NUNCA TER <span className="underline decoration-[#00E676]">RESULTADOS</span>?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            A maioria das pessoas falha no marketing digital porque elas não entendem o <b>processo</b>. Elas tentam copiar estratégias prontas sem entender a lógica por trás delas. É por isso que você se sente confuso, frustrado e com a sensação de que está jogando dinheiro fora. Aqui, nós resolvemos a raiz do problema.
          </p>
          <div className="p-8 glass-card rounded-3xl border-[#2979FF]/20 mb-12 inline-block">
            <p className="text-white font-bold text-xl italic italic">"Aqui você aprende o processo real, não promessas vazias."</p>
          </div>
        </div>
      </section>

      {/* Transformation Table */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black mb-4 uppercase">A Sua <span className="text-[#00E676]">Transformação</span></h2>
          <p className="text-gray-500">Veja o que acontece quando você domina o método.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          <div className="bg-[#0B0E14] p-10">
            <h4 className="text-red-500 font-bold mb-8 flex items-center gap-2 text-xl"><XCircle /> ANTES</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-red-500/10 text-red-500 mt-1"><XCircle size={16}/></span>
                <span className="text-gray-400">Confusão total ao abrir o gerenciador de anúncios</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-red-500/10 text-red-500 mt-1"><XCircle size={16}/></span>
                <span className="text-gray-400">Medo de perder dinheiro e não ter retorno</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-red-500/10 text-red-500 mt-1"><XCircle size={16}/></span>
                <span className="text-gray-400">Tentativas aleatórias baseadas em 'achismo'</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#0B0E14] p-10">
            <h4 className="text-[#00E676] font-bold mb-8 flex items-center gap-2 text-xl"><CheckCircle2 /> DEPOIS</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-[#00E676]/10 text-[#00E676] mt-1"><CheckCircle2 size={16}/></span>
                <span className="text-gray-200">Clareza total do que fazer em cada etapa</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-[#00E676]/10 text-[#00E676] mt-1"><CheckCircle2 size={16}/></span>
                <span className="text-gray-200">Segurança para investir e escalar o lucro</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="p-1 rounded-full bg-[#00E676]/10 text-[#00E676] mt-1"><CheckCircle2 size={16}/></span>
                <span className="text-gray-200">Processo sólido e previsível de vendas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">PERGUNTAS <span className="text-[#2979FF]">FREQUENTES</span></h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-gray-200">{item.question}</span>
                  <ChevronDown className={`text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00E676]/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">COMECE HOJE POR APENAS <span className="text-[#00E676]">R$ 47</span></h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Não deixe para amanhã a decisão que pode destravar seu faturamento hoje. O risco é todo meu.
          </p>
          <Button className="px-16 py-6 text-2xl" glow>
            QUERO DESTRAVAR MINHAS VENDAS AGORA <Rocket size={28} />
          </Button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
            <img src="https://picsum.photos/seed/visa/100/40" alt="Visa" className="grayscale invert" />
            <img src="https://picsum.photos/seed/master/100/40" alt="Mastercard" className="grayscale invert" />
            <img src="https://picsum.photos/seed/pix/100/40" alt="Pix" className="grayscale invert" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">© 2025 Mestres do Digital - Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto">
            Este site não faz parte do Google ou do Facebook. Além disso, este site não é endossado pelo Google ou Facebook de nenhuma maneira. Google e Facebook são marcas registradas de suas respectivas empresas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
