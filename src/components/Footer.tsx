import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-blue-400">Atendi.</span>
                <span className="text-orange-400">plus</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Facilitando a automação e o atendimento para empresas de todos os
              portes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">contato@atendi.plus</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">(44) 3629-9033</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-400">Cianorte - PR</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Demonstração
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">API</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Atendi.plus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
