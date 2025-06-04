
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AIBankSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background with neural network pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-aiblue/10 to-aipink/10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid gap-6">
              {/* Card 1 - Neural Networks */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:rotate-1 transition-all duration-300 relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gradient-to-r from-aipink to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  IA + Banking
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">Redes Neurais Avançadas</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                  Algoritmos de última geração para análise de crédito e investimentos com precisão superior a analistas humanos.
                </p>
              </div>
              
              {/* Card 2 - Automation */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:-rotate-1 transition-all duration-300 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-32 h-32 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <h3 className="text-xl font-semibold mb-2 relative z-10">Automação Completa</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                  Desde onboarding de clientes até decisões de investimento, eliminando intervenção humana e reduzindo custos operacionais.
                </p>
              </div>
              
              {/* Card 3 - Open Finance */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:rotate-2 transition-all duration-300 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <h3 className="text-xl font-semibold mb-2 relative z-10">Open Finance Inteligente</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                  Integração perfeita com o ecossistema financeiro, utilizando dados em tempo real para tomadas de decisão instantâneas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main content background */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-5"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-r from-aiblue to-aipink text-white px-4 py-2 rounded-full text-sm font-medium">
                    🏦 Inovação Financeira
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Projeto <span className="gradient-text">AIBANK</span>
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  O futuro do setor financeiro já começou. AIBANK é nossa solução revolucionária que utiliza agentes 
                  de IA especializados para substituir todas as operações tradicionais de um banco.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="checkmark-item bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                    Avaliações de crédito 300% mais precisas
                  </div>
                  <div className="checkmark-item bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    Atendimento personalizado 24/7 com NLP
                  </div>
                  <div className="checkmark-item bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                    Análise de investimentos com redes neurais
                  </div>
                  <div className="checkmark-item bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                    Detecção de fraudes com 99.8% de precisão
                  </div>
                </div>
                
                <a href="http://aibank.app.br" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-aiblue to-blue-600 hover:from-aiblue/90 hover:to-blue-600/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    🚀 Conheça o AIBANK
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBankSection;
