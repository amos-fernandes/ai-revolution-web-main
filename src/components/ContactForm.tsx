
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from "sonner";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter no mínimo 2 caracteres.' }),
  email: z.string().email({ message: 'Informe um email válido.' }),
  phone: z.string().min(10, { message: 'Telefone deve ter no mínimo 10 dígitos.' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulando envio para o backend
    setTimeout(() => {
      console.log('Form data:', data);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  // WhatsApp redirect handler
  const handleWhatsAppRedirect = () => {
    // Updated WhatsApp number
    const phoneNumber = "5562981647087"; 
    const message = "Olá! Gostaria de mais informações sobre a automação com IA.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem (opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Como podemos ajudar sua empresa?" 
                    className="min-h-24"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-aiblue hover:bg-aiblue/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500">ou</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-aigreen text-aigreen hover:bg-aigreen/10"
              onClick={handleWhatsAppRedirect}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
