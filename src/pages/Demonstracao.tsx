
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Share2, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react';

// Mermaid will be loaded dynamically
declare global {
  interface Window {
    mermaid: any;
  }
}

const Demonstracao = () => {
  useEffect(() => {
    // Load Mermaid dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js';
    script.onload = () => {
      if (window.mermaid) {
        window.mermaid.initialize({ 
          startOnLoad: true,
          theme: 'default',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true
          }
        });
        window.mermaid.contentLoaded();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const agents = [
    {
      id: 1,
      name: 'Agente Captador de Leads',
      icon: Users,
      description: 'Prospecta e qualifica leads automaticamente através de múltiplas fontes de dados',
      features: ['Web Scraping', 'Validação de Dados', 'Score de Qualificação', 'Integração CRM'],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Agente Criador de Campanhas',
      icon: Share2,
      description: 'Desenvolve campanhas personalizadas para redes sociais e email marketing',
      features: ['Conteúdo Automatizado', 'Segmentação Inteligente', 'A/B Testing', 'Multi-canal'],
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Agente RAG WhatsApp',
      icon: MessageSquare,
      description: 'Atendimento inteligente via WhatsApp com capacidade de fechar vendas',
      features: ['Processamento NLP', 'Propostas Automáticas', 'Negociação', 'Integração API'],
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Agente de Vendas',
      icon: TrendingUp,
      description: 'Especialista em conversão e fechamento de negócios',
      features: ['Follow-up Inteligente', 'Análise de Objeções', 'Propostas Dinâmicas', 'CRM Update'],
      color: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'Agente PowerBI Analytics',
      icon: BarChart3,
      description: 'Gera dashboards e relatórios executivos automaticamente',
      features: ['Dashboards Dinâmicos', 'KPIs em Tempo Real', 'Alertas Inteligentes', 'Relatórios Automáticos'],
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto py-32 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Demonstração do Workflow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conheça como nossos 5 agentes de IA trabalham em sinergia para revolucionar 
            seu processo de vendas do início ao fim
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Sistema Integrado de Agentes Inteligentes
          </Badge>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-16">
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Fluxo de Trabalho dos Agentes</CardTitle>
              <CardDescription>
                Visualização completa do processo automatizado de vendas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mermaid-container overflow-x-auto">
                <div className="mermaid text-center">
                  {`graph TD
                    A[🔍 Agente Captador<br/>de Leads] --> B[📊 Qualificação<br/>e Score]
                    B --> C[📱 Agente Criador<br/>de Campanhas]
                    C --> D[📧 Email Marketing<br/>Personalizado]
                    C --> E[📲 Campanhas<br/>Redes Sociais]
                    D --> F[💬 Agente RAG<br/>WhatsApp]
                    E --> F
                    F --> G[🤝 Atendimento<br/>Inteligente]
                    G --> H[💰 Agente de<br/>Vendas]
                    H --> I[📋 Proposta<br/>Automática]
                    I --> J[✅ Fechamento<br/>da Venda]
                    J --> K[📊 Agente PowerBI<br/>Analytics]
                    K --> L[📈 Dashboard<br/>Executivo]
                    K --> M[📋 Relatórios<br/>Automáticos]
                    
                    style A fill:#3b82f6,stroke:#1e40af,color:#fff
                    style C fill:#10b981,stroke:#047857,color:#fff
                    style F fill:#8b5cf6,stroke:#6d28d9,color:#fff
                    style H fill:#f97316,stroke:#c2410c,color:#fff
                    style K fill:#ef4444,stroke:#dc2626,color:#fff`}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card key={agent.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-700 mb-3">Principais Funcionalidades:</h4>
                    {agent.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Details */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Como Funciona o Processo Completo</CardTitle>
            <CardDescription>
              Entenda cada etapa do workflow automatizado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">1. Captação e Qualificação</h3>
                <p className="text-gray-600">
                  O Agente Captador utiliza web scraping e APIs para identificar leads qualificados, 
                  aplicando algoritmos de ML para scoring automático.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">2. Criação de Campanhas</h3>
                <p className="text-gray-600">
                  Campanhas personalizadas são criadas automaticamente para cada segmento, 
                  otimizando conteúdo para máxima conversão.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-600">3. Atendimento Inteligente</h3>
                <p className="text-gray-600">
                  O Agente RAG responde consultas via WhatsApp, utiliza base de conhecimento 
                  para gerar propostas precisas em tempo real.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-600">4. Fechamento de Vendas</h3>
                <p className="text-gray-600">
                  Agente especializado em negociação identifica objeções, ajusta propostas 
                  e conduz o processo até o fechamento.
                </p>
              </div>
              
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-lg font-semibold text-red-600">5. Analytics e Relatórios</h3>
                <p className="text-gray-600">
                  Todos os dados são automaticamente compilados em dashboards PowerBI, 
                  fornecendo insights em tempo real para tomada de decisões estratégicas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ROI Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Resultados Esperados</CardTitle>
            <CardDescription className="text-lg">
              Impacto direto na sua operação de vendas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Redução de Custos Operacionais</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                <p className="text-gray-600">Aumento na Geração de Leads</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-600">Atendimento Ininterrupto</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demonstracao;
