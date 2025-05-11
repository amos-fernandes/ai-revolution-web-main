
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-aiblue/5 to-aipink/5 p-4">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-bold gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-lg text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button className="bg-aiblue hover:bg-aiblue/90 text-white">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
