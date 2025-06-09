import {
  Bot,
  Users,
  Calendar,
  Tag,
  MessageSquare,
  Link,
  QrCode,
  UserCheck,
  UserPlus,
  CornerDownRight,
  KanbanSquare,
  MessagesSquare,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestão de Tarefas",
      description: "Atribua e gerencie tarefas para sua equipe de atendimento.",
    },
    {
      icon: UserPlus,
      title: "Contatos",
      description: "Centralize todos os seus contatos em um único lugar.",
    },
    {
      icon: Calendar,
      title: "Agendamentos",
      description: "Programe e dispare mensagens diretamente pelo WhatsApp.",
    },
    {
      icon: Tag,
      title: "Tags",
      description:
        "Categorize e segmente seus contatos para um atendimento mais personalizado.",
    },
    {
      icon: MessageSquare,
      title: "Chat Interno",
      description: "Facilite a comunicação interna da sua equipe.",
    },
    {
      icon: Link,
      title: "Integrações",
      description:
        "Conecte-se com Typebot, n8n, Dialogflow, Webhook e ChatGPT.",
    },
    {
      icon: QrCode,
      title: "Conexões QR Code",
      description: "Conecte facilmente ao WhatsApp através do QR Code.",
    },
    {
      icon: Bot,
      title: "Chatbots",
      description:
        "Automatize as respostas do WhatsApp com filas URA, flow builder e ChatGPT.",
    },
    {
      icon: UserCheck,
      title: "Multiusuários",
      description:
        "Permita que vários usuários da sua equipe utilizem o sistema simultaneamente.",
    },
    {
      icon: CornerDownRight,
      title: "Respostas Rápidas",
      description: "Responda rapidamente com mensagens pré-configuradas.",
    },
    {
      icon: KanbanSquare,
      title: "CRM Kanban",
      description:
        "Organize seus contatos e leads em um sistema Kanban intuitivo.",
    },
    {
      icon: MessagesSquare,
      title: "Multiatendimento",
      description:
        "Gerencie vários atendimentos simultaneamente, aumentando a eficiência do seu time.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Funcionalidades que
            <span className="text-primary block">
              revolucionam seu atendimento
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para gerenciar conversas, contatos e fluxos
            com eficiência e inteligência.
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
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
