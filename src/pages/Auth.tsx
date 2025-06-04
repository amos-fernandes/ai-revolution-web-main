
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

const Auth = () => {
  const { user, signIn, signUp, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/" replace />
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres'
    }
    if (!/[A-Z]/.test(password)) {
      return 'A senha deve conter pelo menos uma letra maiúscula'
    }
    if (!/[a-z]/.test(password)) {
      return 'A senha deve conter pelo menos uma letra minúscula'
    }
    if (!/[0-9]/.test(password)) {
      return 'A senha deve conter pelo menos um número'
    }
    return null
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await signIn(email, password)
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Credenciais inválidas. Verifique seu email e senha.')
        } else if (error.message.includes('Email not confirmed')) {
          toast.error('Por favor, confirme seu email antes de fazer login.')
        } else {
          toast.error('Erro ao fazer login. Tente novamente.')
        }
      } else {
        toast.success('Login realizado com sucesso!')
        // Navigation will be handled by the auth context
      }
    } catch (error) {
      toast.error('Erro inesperado. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const passwordError = validatePassword(password)
    if (passwordError) {
      toast.error(passwordError)
      setIsLoading(false)
      return
    }

    try {
      const { error } = await signUp(email, password, fullName)
      
      if (error) {
        if (error.message.includes('User already registered')) {
          toast.error('Este email já está cadastrado. Tente fazer login.')
        } else if (error.message.includes('Password should be at least 6 characters')) {
          toast.error('A senha deve ter pelo menos 6 caracteres.')
        } else {
          toast.error('Erro ao criar conta. Tente novamente.')
        }
      } else {
        toast.success('Conta criada com sucesso! Verifique seu email para confirmação.')
      }
    } catch (error) {
      toast.error('Erro inesperado. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/4f238088-3501-4d1d-a902-a91c32a00408.png" 
            alt="VerticalAgent Logo" 
            className="mx-auto w-20 h-20 rounded-xl"
          />
          <h2 className="mt-6 text-3xl font-bold gradient-text">
            VerticalAgent
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Acesse sua conta ou crie uma nova
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Autenticação</CardTitle>
            <CardDescription>
              Entre com sua conta ou crie uma nova para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Criar Conta</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Sua senha"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-aiblue hover:bg-aiblue/90"
                    disabled={isLoading || loading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
                      Nome Completo
                    </label>
                    <Input
                      id="signup-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Mínimo 8 caracteres"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula e número
                    </p>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-aiblue hover:bg-aiblue/90"
                    disabled={isLoading || loading}
                  >
                    {isLoading ? 'Criando conta...' : 'Criar Conta'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Auth
