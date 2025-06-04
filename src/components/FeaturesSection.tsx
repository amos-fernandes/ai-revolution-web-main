
import { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
}

const FeaturesSection = () => {
  const [features] = useState<Feature[]>([
    {
      title: "Agentes de IA Autônomos",
      description: "Substitua funções completas com agentes de IA treinados para executar tarefas específicas com precisão e eficiência superiores aos humanos.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Economia de Recursos",
      description: "Elimine custos trabalhistas, benefícios, turnover e necessidade de gestão humana com funcionários virtuais que nunca tiram férias.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Disponibilidade 24/7",
      description: "Conte com atendimento, processamento e análises em tempo integral, sem pausas, sem cansaço e com performance consistente.",
      icon: "🕒",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Escalabilidade Instantânea",
      description: "Amplie ou reduza sua equipe virtual em minutos, sem processos de contratação ou demissão, adaptando-se a demandas sazonais.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Aprendizado Contínuo",
      description: "Nossos agentes de IA evoluem constantemente, aprendendo com cada interação e melhorando seu desempenho com o tempo.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Integração Perfeita",
      description: "Compatível com suas ferramentas atuais, nossos agentes se integram facilmente aos sistemas existentes sem grandes mudanças estruturais.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-blue-500"
    }
  ]);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme Sua Operação com <span className="gradient-text">Inteligência Artificial</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa tecnologia de ponta substitui funções humanas com agentes de IA especializados, 
            otimizando processos e reduzindo drasticamente seus custos operacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className="text-4xl bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
