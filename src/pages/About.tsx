
import { ChevronRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

const About = () => {
  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aiblue/5 to-aipink/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Quem Somos
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 animate-fade-up">
              Revolucionando a economia com automação inteligente e agentes de IA de última geração
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Nossa Missão</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Transformar radicalmente o mercado de trabalho através da substituição eficiente de funções humanas
                  por Inteligência Artificial avançada, gerando economia e aumentando a produtividade das empresas.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Acreditamos que a automação inteligente é o próximo passo evolutivo para as organizações 
                  que desejam se manter competitivas em um mundo cada vez mais digitalizado e dinâmico.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden h-80 bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center">
                <div className="text-7xl">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Especialização
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Combinamos as tecnologias mais avançadas para criar soluções de IA que realmente substituem 
              humanos em diversas funções.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-aiblue/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Redes Neurais</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Arquiteturas profundas com capacidade de processamento e aprendizado similares ao cérebro humano, 
                proporcionando tomada de decisões autônoma.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-aipink/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Processamento de Linguagem Natural</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sistemas avançados de NLP capazes de compreender e gerar linguagem humana com precisão, 
                permitindo interações naturais com clientes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-aigreen/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agentes Autônomos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sistemas completos que combinam múltiplas tecnologias de IA para executar funções complexas 
                de forma independente e adaptativa.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/services" className="inline-flex items-center text-aiblue hover:text-aiblue/80 font-medium">
              Conheça nossos serviços
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Team / Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-aiblue to-aipink p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Nossa Visão</h2>
                <p className="text-lg mb-6">
                  Um futuro onde a IA liberta as empresas das limitações do trabalho humano, permitindo 
                  maior inovação, eficiência e crescimento exponencial.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Escalabilidade ilimitada
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Operações 24/7 sem interrupções
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Transformação digital completa
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Vantagem competitiva sustentável
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6">Equipe de Especialistas</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Nosso time é formado por cientistas de dados, engenheiros de IA e especialistas em automação 
                  com décadas de experiência combinada nas maiores empresas de tecnologia do mundo.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white font-bold">DR</div>
                    <div>
                      <h4 className="font-semibold">Dr. Ricardo Silva</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Chief AI Scientist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white font-bold">JL</div>
                    <div>
                      <h4 className="font-semibold">Julia Lima</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Head of Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white font-bold">MC</div>
                    <div>
                      <h4 className="font-semibold">Marcos Costa</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Neural Networks Architect</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-aiblue to-aipink flex items-center justify-center text-white font-bold">AP</div>
                    <div>
                      <h4 className="font-semibold">Ana Paula Santos</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AI Implementation Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Pronto para conhecer nossos serviços?" 
        subtitle="Descubra como podemos transformar sua empresa com agentes de IA de última geração"
        buttonText="Ver Serviços"
        buttonLink="/services"
      />
    </div>
  );
};

export default About;
