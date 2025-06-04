
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
        }}
      />
      
      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-aiblue/20 to-aipink/20"></div>
      
      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-aiblue rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-aipink rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              🚀 Revolução em Andamento
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            A Revolução dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Funcionários Virtuais</span> Já Começou
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up max-w-3xl mx-auto">
            Automatize setores inteiros com Agentes de IA — Reduza custos em até 70% e aumente a produtividade exponencialmente
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Link to="/about">
              <Button className="bg-gradient-to-r from-aiblue to-blue-600 hover:from-aiblue/90 hover:to-blue-600/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Descubra Como
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300">
                Nossos Serviços
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
              <div className="text-sm">Redução de Custos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm">Disponibilidade</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-sm">Mais Eficiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
