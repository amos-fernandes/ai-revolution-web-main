
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Pronto para revolucionar sua empresa com IA?",
  subtitle = "Entre em contato conosco hoje e descubra como nossos agentes de IA podem transformar seu negócio.",
  buttonText = "Fale Conosco",
  buttonLink = "/contact"
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-background opacity-10"></div>
      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up">
          {subtitle}
        </p>
        <Link to={buttonLink}>
          <Button className="bg-aiblue hover:bg-aiblue/90 text-white text-lg px-8 py-6">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
