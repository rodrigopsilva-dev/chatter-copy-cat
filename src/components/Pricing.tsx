
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "97",
      period: "mês",
      description: "Perfeito para pequenos negócios",
      features: [
        "Até 1.000 contatos",
        "3 atendentes simultâneos",
        "Chatbot básico",
        "Relatórios simples",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "197",
      period: "mês",
      description: "Ideal para empresas em crescimento",
      features: [
        "Até 5.000 contatos",
        "10 atendentes simultâneos",
        "Chatbot com IA avançada",
        "CRM completo",
        "Relatórios avançados",
        "Integrações ilimitadas",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "397",
      period: "mês",
      description: "Para grandes empresas",
      features: [
        "Contatos ilimitados",
        "Atendentes ilimitados",
        "IA personalizada",
        "API completa",
        "White label",
        "Gerente de sucesso",
        "Suporte 24/7"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Planos que cabem
            <span className="text-primary block">no seu bolso</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seu negócio e comece a vender mais hoje mesmo
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 animate-scale-in ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-primary/50 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem <strong>7 dias grátis</strong> • Cancele quando quiser • Sem fidelidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
