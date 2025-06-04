
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Pronto para revolucionar sua empresa com IA?",
  subtitle = "Entre em contato conosco hoje e descubra como nossos agentes de IA podem transformar seu negócio.",
  buttonText = "Fale Conosco",
  buttonLink = "/contact"
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background with modern pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(255, 64, 129, 0.1) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-aiblue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-aipink rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-aiblue rounded-full opacity-25 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-aipink rounded-full opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/10 backdrop-blur-sm text-aiblue px-4 py-2 rounded-full text-sm font-medium border border-aiblue/20">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Transformação Digital
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Link to={buttonLink}>
              <Button className="bg-gradient-to-r from-aiblue to-blue-600 hover:from-aiblue/90 hover:to-blue-600/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              📞 Consultoria gratuita • 🚀 Implementação rápida • 💼 ROI garantido
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-aiblue mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Empresas Transformadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-aipink mb-2">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Taxa de Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-500 mb-2">R$ 10M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Economia Gerada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
