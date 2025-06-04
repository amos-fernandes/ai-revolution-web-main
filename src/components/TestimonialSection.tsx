
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialSection = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      name: "Ana Silva",
      position: "CEO",
      company: "TechSolve",
      quote: "Reduzimos nossos custos operacionais em 70% após substituir o departamento de atendimento ao cliente por agentes de IA. A satisfação do cliente aumentou em 35%.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      position: "Diretor Financeiro",
      company: "FinTech Brasil",
      quote: "O AIBANK revolucionou nossa abordagem de análise de crédito. O tempo de processamento caiu de dias para segundos, com uma precisão superior aos nossos analistas mais experientes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Carolina Ferreira",
      position: "Diretora de Operações",
      company: "LogiSmart",
      quote: "Os agentes de IA implementados em nossa central de monitoramento trabalham 24/7 sem falhas. Detectam anomalias que passariam despercebidas e reduziram nossas perdas em 60%.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-aiblue to-aipink text-white px-4 py-2 rounded-full text-sm font-medium">
              💬 Depoimentos Reais
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Empresas que já implementaram nossos agentes de IA estão transformando seus resultados.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mx-4 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Quote className="w-full h-full text-aiblue" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Quote */}
                    <div className="text-4xl text-aiblue mb-4 text-center">"</div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center italic leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    
                    {/* Profile */}
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-aiblue to-aipink">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 text-center">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                        <p className="text-sm font-medium text-aiblue">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/80 backdrop-blur-sm border-2 border-aiblue/20 hover:bg-aiblue hover:text-white" />
          <CarouselNext className="bg-white/80 backdrop-blur-sm border-2 border-aiblue/20 hover:bg-aiblue hover:text-white" />
        </Carousel>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Empresas que confiam em nós:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechSolve</div>
            <div className="text-2xl font-bold text-gray-400">FinTech Brasil</div>
            <div className="text-2xl font-bold text-gray-400">LogiSmart</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
