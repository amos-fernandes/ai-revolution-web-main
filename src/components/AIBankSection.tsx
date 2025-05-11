
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AIBankSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-aiblue/10 to-aipink/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 transform rotate-1 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-aipink text-white text-xs font-bold px-3 py-1 rounded-full">
                IA + Banking
              </div>
              <h3 className="text-xl font-semibold mb-2">Redes Neurais Avançadas</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Algoritmos de última geração para análise de crédito e investimentos com precisão superior a analistas humanos.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 transform -rotate-1">
              <h3 className="text-xl font-semibold mb-2">Automação Completa</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desde onboarding de clientes até decisões de investimento, eliminando intervenção humana e reduzindo custos operacionais.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform rotate-2">
              <h3 className="text-xl font-semibold mb-2">Open Finance Inteligente</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integração perfeita com o ecossistema financeiro, utilizando dados em tempo real para tomadas de decisão instantâneas.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Projeto <span className="gradient-text">AIBANK</span>
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              O futuro do setor financeiro já começou. AIBANK é nossa solução revolucionária que utiliza agentes 
              de IA especializados para substituir todas as operações tradicionais de um banco.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="checkmark-item">
                Avaliações de crédito 300% mais precisas que métodos tradicionais
              </li>
              <li className="checkmark-item">
                Atendimento personalizado 24/7 com NLP avançado
              </li>
              <li className="checkmark-item">
                Análise de investimentos baseada em redes neurais profundas
              </li>
              <li className="checkmark-item">
                Detecção de fraudes com 99.8% de precisão
              </li>
            </ul>
            
            <a href="http://aibank.app.br" target="_blank" rel="noopener noreferrer">
              <Button className="bg-aiblue hover:bg-aiblue/90 text-white">
                Conheça o AIBANK
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBankSection;
