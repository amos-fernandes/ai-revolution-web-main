
import { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeaturesSection = () => {
  const [features] = useState<Feature[]>([
    {
      title: "Agentes de IA Autônomos",
      description: "Substitua funções completas com agentes de IA treinados para executar tarefas específicas com precisão e eficiência superiores aos humanos.",
      icon: "🤖"
    },
    {
      title: "Economia de Recursos",
      description: "Elimine custos trabalhistas, benefícios, turnover e necessidade de gestão humana com funcionários virtuais que nunca tiram férias.",
      icon: "💰"
    },
    {
      title: "Disponibilidade 24/7",
      description: "Conte com atendimento, processamento e análises em tempo integral, sem pausas, sem cansaço e com performance consistente.",
      icon: "🕒"
    },
    {
      title: "Escalabilidade Instantânea",
      description: "Amplie ou reduza sua equipe virtual em minutos, sem processos de contratação ou demissão, adaptando-se a demandas sazonais.",
      icon: "📈"
    },
    {
      title: "Aprendizado Contínuo",
      description: "Nossos agentes de IA evoluem constantemente, aprendendo com cada interação e melhorando seu desempenho com o tempo.",
      icon: "🧠"
    },
    {
      title: "Integração Perfeita",
      description: "Compatível com suas ferramentas atuais, nossos agentes se integram facilmente aos sistemas existentes sem grandes mudanças estruturais.",
      icon: "🔄"
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:translate-y-[-5px]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
