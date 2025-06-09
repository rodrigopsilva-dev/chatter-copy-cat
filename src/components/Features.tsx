
import { Bot, Zap, Users, BarChart, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Chatbot Inteligente",
      description: "IA avançada para atendimento automático 24/7 com respostas personalizadas e naturais."
    },
    {
      icon: Zap,
      title: "Automação Completa",
      description: "Fluxos automatizados para vendas, suporte e qualificação de leads sem intervenção manual."
    },
    {
      icon: Users,
      title: "CRM Integrado",
      description: "Gerencie todos os contatos, histórico de conversas e pipeline de vendas em um só lugar."
    },
    {
      icon: BarChart,
      title: "Relatórios Avançados",
      description: "Métricas detalhadas de performance, conversão e ROI para otimizar seus resultados."
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Criptografia de ponta a ponta e conformidade com LGPD para máxima segurança dos dados."
    },
    {
      icon: Smartphone,
      title: "Multi-Plataforma",
      description: "Integração com WhatsApp, Instagram, Facebook e outras plataformas de mensagem."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Funcionalidades que
            <span className="text-primary block">revolucionam seu negócio</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para automatizar, vender mais e crescer seu negócio através do WhatsApp
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
