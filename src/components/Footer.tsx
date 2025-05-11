
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-aiblue to-aipink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">VerticalAgent</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Automatize setores inteiros com Agentes de IA — Reduza custos e aumente a produtividade
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-aiblue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-aiblue transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-aiblue transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-aiblue transition-colors">
                  Contate-nos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Goiânia, GO</p>
              <p className="mb-2">consultor.amos@hotmail.com</p>
              <p>+55 (62) 9 8164-7087</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} VerticalAgent. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-aiblue transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-aiblue transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
