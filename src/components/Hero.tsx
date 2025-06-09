import { Button } from "@/components/ui/button";
import { MessageCircle, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900">Atendi.plus</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Funcionalidades</a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Preços</a>
          <Button variant="outline" className="mr-2">Entrar</Button>
          <Button>Começar Grátis</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Automatize seu
                <span className="text-primary block">WhatsApp Business</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
                Transforme seu atendimento com chatbots inteligentes, automação completa e integração com CRM. Aumente suas vendas em até 300%.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Teste Grátis por 7 dias
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Ver Demonstração
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>+50.000 empresas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>300% mais vendas</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-up lg:ml-8">
              <div className="relative">
                <div className="rounded-2xl bg-white p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Bot Inteligente</p>
                        <p className="text-sm text-gray-500">Atendimento 24/7 automático</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Olá! Como posso ajudar você hoje?</p>
                    </div>
                    <div className="bg-primary rounded-lg p-4 text-white ml-8">
                      <p className="text-sm">Gostaria de saber sobre os planos</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Perfeito! Temos planos a partir de R$ 97/mês. Posso agendar uma demonstração?</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-blue-200/50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
