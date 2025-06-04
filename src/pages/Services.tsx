
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const Services = () => {
  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aiblue/5 to-aipink/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 animate-fade-up">
              Soluções de IA que transformam empresas através da substituição eficiente de funções humanas
            </p>
          </div>
        </div>
      </section>
      
      {/* AI Replacement Service */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Substituição de <span className="gradient-text">Funcionários por IA</span>
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Nossos agentes de IA são projetados para substituir completamente funções humanas em sua empresa,
                eliminando custos trabalhistas e aumentando a eficiência operacional.
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Vantagens</h3>
                <ul className="space-y-4">
                  <li className="checkmark-item">
                    <div>
                      <strong className="text-aiblue">Custos trabalhistas ZERO</strong>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Elimine salários, benefícios, encargos, férias e todos os custos relacionados a funcionários humanos.
                      </p>
                    </div>
                  </li>
                  <li className="checkmark-item">
                    <div>
                      <strong className="text-aiblue">Atendimento 24/7</strong>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Agentes que trabalham ininterruptamente, sem pausas, férias ou finais de semana.
                      </p>
                    </div>
                  </li>
                  <li className="checkmark-item">
                    <div>
                      <strong className="text-aiblue">Alta escalabilidade</strong>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Amplie ou reduza sua equipe virtual instantaneamente conforme a demanda, sem processos de RH.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Link to="/contact">
                <Button className="bg-aiblue hover:bg-aiblue/90 text-white">
                  Solicitar Demonstração
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Atendimento ao Cliente</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Agentes conversacionais avançados que entendem contexto, emoções e resolvem problemas complexos.
                  </p>
                  <div className="text-sm text-aiblue">Substitui: Equipe de Suporte</div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Vendas & Marketing</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Agentes que qualificam leads, fazem follow-up e convertem prospects com eficiência superior.
                  </p>
                  <div className="text-sm text-aiblue">Substitui: Equipe de Vendas</div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Análise de Documentos</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Processamento e análise de contratos, relatórios e documentos com precisão superior a humanos.
                  </p>
                  <div className="text-sm text-aiblue">Substitui: Analistas Jurídicos</div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Agentes que escrevem, testam e mantêm código com qualidade e velocidade superiores.
                  </p>
                  <div className="text-sm text-aiblue">Substitui: Desenvolvedores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AIBANK */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projeto <span className="gradient-text">AIBANK</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Nossa solução revolucionária para o setor financeiro, combinando múltiplos agentes de IA 
              para criar uma operação bancária totalmente automatizada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white text-2xl mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Rede Neural de Crédito</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Algoritmos avançados que analisam milhares de variáveis para determinar o risco de crédito com 
                precisão 300% superior aos métodos tradicionais.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white text-2xl mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Agentes de Investimento</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sistemas de IA que analisam mercados financeiros em tempo real, identificando oportunidades e 
                gerando retornos superiores a gestores humanos.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white text-2xl mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Finance AI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integração perfeita com o ecossistema bancário aberto, utilizando dados em tempo real para 
                oferecer serviços financeiros personalizados.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Aplicações do AIBANK</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="checkmark-item">
                Análise de crédito automatizada para pessoas físicas e jurídicas
              </div>
              <div className="checkmark-item">
                Monitoramento contínuo de carteiras de investimento
              </div>
              <div className="checkmark-item">
                Detecção de fraudes em tempo real com 99.8% de precisão
              </div>
              <div className="checkmark-item">
                Atendimento bancário personalizado 24/7 via múltiplos canais
              </div>
              <div className="checkmark-item">
                Gerenciamento de risco financeiro baseado em redes neurais profundas
              </div>
              <div className="checkmark-item">
                Emissão e gestão de cartões virtuais inteligentes
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a href="http://aibank.app.br" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-aiblue to-aipink hover:from-aiblue/90 hover:to-aipink/90 text-white">
                  Saber mais sobre o AIBANK
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Services;
