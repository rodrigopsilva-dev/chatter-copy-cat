
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      content: "O AtendeChat transformou completamente nosso atendimento. Aumentamos as vendas em 250% e reduzimos o tempo de resposta para segundos.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      name: "Maria Santos",
      company: "Loja Virtual Plus",
      content: "Incrível como conseguimos automatizar todo o processo de vendas. Nossos clientes adoram o atendimento rápido e personalizado.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      name: "Pedro Costa",
      company: "Consultoria Digital",
      content: "A melhor ferramenta de automação que já usei. Interface intuitiva, suporte excelente e resultados impressionantes desde o primeiro dia.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            O que nossos clientes
            <span className="text-primary block">estão falando</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Mais de 50.000 empresas já confiam no AtendeChat para automatizar suas vendas
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
