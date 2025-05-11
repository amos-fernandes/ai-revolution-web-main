
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
}

const TestimonialSection = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      name: "Ana Silva",
      position: "CEO",
      company: "TechSolve",
      quote: "Reduzimos nossos custos operacionais em 70% após substituir o departamento de atendimento ao cliente por agentes de IA. A satisfação do cliente aumentou em 35%."
    },
    {
      name: "Ricardo Mendes",
      position: "Diretor Financeiro",
      company: "FinTech Brasil",
      quote: "O AIBANK revolucionou nossa abordagem de análise de crédito. O tempo de processamento caiu de dias para segundos, com uma precisão superior aos nossos analistas mais experientes."
    },
    {
      name: "Carolina Ferreira",
      position: "Diretora de Operações",
      company: "LogiSmart",
      quote: "Os agentes de IA implementados em nossa central de monitoramento trabalham 24/7 sem falhas. Detectam anomalias que passariam despercebidas e reduziram nossas perdas em 60%."
    }
  ]);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
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
          className="max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="text-4xl text-aiblue mb-4">"</div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-aiblue to-aipink rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
