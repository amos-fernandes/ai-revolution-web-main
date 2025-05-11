
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import AIBankSection from '@/components/AIBankSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesSection />
      <AIBankSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;
