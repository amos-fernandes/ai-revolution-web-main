
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-aiblue/5 to-aipink/5 animate-gradient-shift"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-aiblue rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-aipink rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            A Revolução dos <span className="gradient-text">Funcionários Virtuais</span> Já Começou
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-up">
            Automatize setores inteiros com Agentes de IA — Reduza custos e aumente a produtividade
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Link to="/about">
              <Button className="bg-aiblue hover:bg-aiblue/90 text-white text-lg px-6 py-6">
                Quem Somos
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-lg px-6 py-6 border-2">
                Nossos Serviços
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-medium mb-4">Serviços Oferecidos:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="checkmark-item">
                Substituição de funcionários por IA
              </div>
              <div className="checkmark-item">
                IA personalizada para atendimento, vendas, suporte
              </div>
              <div className="checkmark-item">
                Monitoramento inteligente de tarefas repetitivas
              </div>
              <div className="checkmark-item">
                <a href="http://aibank.app.br" target="_blank" rel="noopener noreferrer" className="text-aiblue hover:underline">
                  Projeto AIBANK com rede neural para investimentos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
