import { useState } from 'react';
import { Send, Users, FileSpreadsheet, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type Lead = {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  whatsapp: string;
  industry: string;
  createdAt: string;
};

type Campaign = {
  id: string;
  name: string;
  message: string;
  targetSegment: string;
  status: 'draft' | 'active' | 'completed';
  sentCount: number;
  openCount: number;
  responseCount: number;
  createdAt: string;
};

// Mock data for demonstration
const mockLeads: Lead[] = [
  {
    id: '1',
    companyName: 'TechCorp Goiânia',
    contactName: 'Ana Silva',
    email: 'ana@techcorp.com.br',
    phone: '(62) 3555-1234',
    whatsapp: '5562998765432',
    industry: 'Tecnologia',
    createdAt: '2025-05-10',
  },
  {
    id: '2',
    companyName: 'Indústrias Goiás',
    contactName: 'Carlos Mendes',
    email: 'carlos@industriasgoias.com.br',
    phone: '(62) 3555-9876',
    whatsapp: '5562987651234',
    industry: 'Manufatura',
    createdAt: '2025-05-11',
  },
  {
    id: '3',
    companyName: 'Construtora Cerrado',
    contactName: 'Patricia Alves',
    email: 'patricia@cerrado.com.br',
    phone: '(62) 3555-5678',
    whatsapp: '5562991234567',
    industry: 'Construção',
    createdAt: '2025-05-12',
  },
];

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Introdução IA Revolution',
    message: 'Conheça o AI Revolution e economize até 95% com agentes de IA!',
    targetSegment: 'Tecnologia',
    status: 'completed',
    sentCount: 150,
    openCount: 85,
    responseCount: 23,
    createdAt: '2025-05-01',
  },
  {
    id: '2',
    name: 'Oferta Especial Manufatura',
    message: 'Substitua processos manuais por IA com custo zero trabalhista',
    targetSegment: 'Manufatura',
    status: 'active',
    sentCount: 80,
    openCount: 45,
    responseCount: 10,
    createdAt: '2025-05-05',
  },
  {
    id: '3',
    name: 'Campanha Construção',
    message: 'Otimize projetos com IA e reduza custos operacionais',
    targetSegment: 'Construção',
    status: 'draft',
    sentCount: 0,
    openCount: 0,
    responseCount: 0,
    createdAt: '2025-05-08',
  },
];

const Dashboard = () => {
  const [webhookUrl, setWebhookUrl] = useState<string>('');
  const [isRunningAgnus, setIsRunningAgnus] = useState<boolean>(false);
  const [isSendingCampaign, setIsSendingCampaign] = useState<boolean>(false);

  const handleRunAgnus = () => {
    setIsRunningAgnus(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsRunningAgnus(false);
      toast("Agente Agnus Ativado", {
        description: "A prospecção de empresas foi iniciada. Monitore os resultados na aba Leads.",
      });
    }, 3000);
  };

  const handleSendCampaign = (campaignId: string) => {
    setIsSendingCampaign(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSendingCampaign(false);
      toast("Campanha Enviada", {
        description: "Sua campanha está sendo enviada aos contatos selecionados.",
      });
    }, 2000);
  };

  const handleIntegrateWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast.error("Por favor, insira a URL do webhook do Twilio/WhatsApp.");
      return;
    }

    toast("Webhook Integrado", {
      description: "A integração com WhatsApp foi configurada com sucesso.",
    });
  };

  return (
    <div className="container mx-auto py-32 px-4">
      <h1 className="text-3xl font-bold mb-10">Painel de Controle - Agente Agnus</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockLeads.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 desde a última semana
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCampaigns.filter(c => c.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              {mockCampaigns.filter(c => c.status === 'draft').length} em rascunho
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Resposta</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.3%</div>
            <p className="text-xs text-muted-foreground">
              +2.5% desde o último mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contatos Qualificados</CardTitle>
            <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Prontos para próxima etapa
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Gerenciamento</h2>
        <Button 
          variant="default" 
          onClick={handleRunAgnus} 
          disabled={isRunningAgnus}
        >
          {isRunningAgnus ? 'Processando...' : 'Executar Agente Agnus'}
        </Button>
      </div>

      <Tabs defaultValue="leads" className="mb-10">
        <TabsList>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="integration">Integração WhatsApp</TabsTrigger>
        </TabsList>
        
        <TabsContent value="leads" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Leads</CardTitle>
              <CardDescription>
                Empresas de Goiás prospectadas pelo Agente Agnus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>WhatsApp</TableHead>
                    <TableHead>Segmento</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.companyName}</TableCell>
                      <TableCell>{lead.contactName}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.whatsapp}</TableCell>
                      <TableCell>{lead.industry}</TableCell>
                      <TableCell>{lead.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Campanhas de Marketing</CardTitle>
              <CardDescription>
                Gerencie e acompanhe suas campanhas automatizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Segmento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enviados</TableHead>
                    <TableHead>Aberturas</TableHead>
                    <TableHead>Respostas</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.targetSegment}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          campaign.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : campaign.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status === 'active' 
                            ? 'Ativo' 
                            : campaign.status === 'completed'
                              ? 'Concluído'
                              : 'Rascunho'}
                        </span>
                      </TableCell>
                      <TableCell>{campaign.sentCount}</TableCell>
                      <TableCell>{campaign.openCount}</TableCell>
                      <TableCell>{campaign.responseCount}</TableCell>
                      <TableCell>
                        {campaign.status !== 'completed' && (
                          <Button 
                            size="sm" 
                            onClick={() => handleSendCampaign(campaign.id)}
                            disabled={isSendingCampaign}
                          >
                            <Send className="w-4 h-4 mr-1" /> 
                            Enviar
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integration" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Integração com WhatsApp</CardTitle>
              <CardDescription>
                Configure a integração com Twilio ou API oficial do WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleIntegrateWebhook} className="space-y-4">
                <div>
                  <label htmlFor="webhook-url" className="block text-sm font-medium text-gray-700 mb-1">
                    URL do Webhook (Twilio/WhatsApp Business)
                  </label>
                  <input
                    id="webhook-url"
                    type="text"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="https://api.twilio.com/2010-04-01/your-webhook-url"
                  />
                </div>
                <div>
                  <Button type="submit">Integrar WhatsApp</Button>
                </div>
              </form>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Status da Integração</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Para completar a integração com WhatsApp Business API ou Twilio, você precisará configurar um backend 
                  que possa processar as webhooks e gerenciar as mensagens. 
                </p>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded">
                  <p className="text-sm text-amber-800">
                    <strong>Nota:</strong> Esta é apenas uma demonstração da interface. Para funcionalidade completa, 
                    é necessário conectar este frontend a um backend com autenticação e integrações de API.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
