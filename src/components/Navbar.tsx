
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-aiblue to-aipink rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="text-2xl font-bold gradient-text">VerticalAgent</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-aiblue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-aiblue transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-aiblue transition-colors">Quem Somos</Link>
          <Link to="/services" className="font-medium hover:text-aiblue transition-colors">Serviços</Link>
          <Link to="/contact">
            <Button className="bg-aiblue hover:bg-aiblue/90 text-white">Contate-nos</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-aiblue"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 pt-8">
            <Link 
              to="/" 
              className="text-xl font-medium hover:text-aiblue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-xl font-medium hover:text-aiblue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Quem Somos
            </Link>
            <Link 
              to="/services" 
              className="text-xl font-medium hover:text-aiblue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Button className="bg-aiblue hover:bg-aiblue/90 text-white">
                Contate-nos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
