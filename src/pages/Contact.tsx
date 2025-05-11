
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aiblue/5 to-aipink/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contate-nos
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 animate-fade-up">
              Estamos prontos para transformar sua empresa com soluções de IA de última geração
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Vamos Conversar Sobre Seus <span className="gradient-text">Desafios</span>
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Nossos especialistas estão prontos para entender sua operação atual e identificar 
                oportunidades para substituição eficiente de funções por agentes de IA.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-aiblue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Localização</h3>
                    <p className="text-gray-600 dark:text-gray-400">São Paulo, SP</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-aiblue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">contato@airevolution.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-aiblue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Telefone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-aiblue/10 to-aipink/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Pronto para começar?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Preencha o formulário ao lado ou fale conosco diretamente via WhatsApp para iniciar uma 
                  conversa sobre como podemos ajudar sua empresa.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossa tecnologia de substituição por IA.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Quanto tempo leva para implementar um agente de IA?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                O tempo médio de implementação varia de 2 a 8 semanas, dependendo da complexidade da função 
                a ser substituída e da disponibilidade de dados para treinamento.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Como é o modelo de precificação?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trabalhamos com um modelo de assinatura mensal baseado na complexidade e no volume de 
                trabalho do agente de IA, sempre garantindo um custo significativamente menor do que 
                manter funcionários humanos.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Os agentes de IA precisam de supervisão humana?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nossos agentes são projetados para operar de forma autônoma, sem necessidade de supervisão 
                constante. Oferecemos monitoramento e melhorias contínuas como parte do nosso serviço.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">É possível integrar com sistemas existentes?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sim, desenvolvemos conectores para integração com a maioria dos sistemas empresariais, CRMs, 
                ERPs e plataformas de comunicação, garantindo uma transição suave.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
