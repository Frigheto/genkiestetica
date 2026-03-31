import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Mail, Lock, User, Phone, FileText, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function LoginLocatarioPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  // Login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form
  const [registerData, setRegisterData] = useState({
    nome: "",
    email: "",
    telefone: "",
    profissao: "",
    conselho: "",
    password: "",
    confirmPassword: "",
  });

  // Função para formatar telefone automaticamente
  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // Validação de senha em tempo real
  const validatePassword = (password: string) => {
    return {
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasMinLength: password.length >= 6,
    };
  };

  const passwordValidation = validatePassword(registerData.password);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(loginEmail, loginPassword);
      if (result.success) {
        toast.success("Login realizado com sucesso!");
        // Se for admin, redirecionar para dashboard admin
        if (result.isAdmin) {
          navigate("/admin/dashboard");
        } else {
          // Usuário normal vai para painel de reservas
          navigate("/locatario/reservas");
        }
      } else {
        toast.error("Email ou senha inválidos. Verifique suas credenciais.");
      }
    } catch {
      toast.error("Erro ao realizar login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      toast.error("Por favor, insira um email válido (ex: usuario@gmail.com)");
      setIsLoading(false);
      return;
    }

    // Validação de telefone (formato brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
    const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
    const telefoneLimpo = registerData.telefone.replace(/\s/g, '');
    if (!telefoneRegex.test(telefoneLimpo)) {
      toast.error("Telefone inválido. Use o formato: (XX) XXXXX-XXXX");
      setIsLoading(false);
      return;
    }

    // Validação de senha
    if (registerData.password.length < 6) {
      toast.error("A senha deve ter no mínimo 6 caracteres.");
      setIsLoading(false);
      return;
    }

    const hasUpperCase = /[A-Z]/.test(registerData.password);
    const hasLowerCase = /[a-z]/.test(registerData.password);
    const hasNumber = /[0-9]/.test(registerData.password);

    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      toast.error("A senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula e 1 número.");
      setIsLoading(false);
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("As senhas não coincidem.");
      setIsLoading(false);
      return;
    }

    try {
      const success = await register({
        name: registerData.nome,
        email: registerData.email,
        telefone: registerData.telefone,
        profissao: `${registerData.profissao} - ${registerData.conselho}`,
        password: registerData.password,
      });

      if (success) {
        toast.success("Cadastro realizado com sucesso! Faça login para continuar.");
        // Limpar formulário
        setRegisterData({
          nome: "",
          email: "",
          telefone: "",
          profissao: "",
          conselho: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Este email já está cadastrado. Tente fazer login.");
      }
    } catch {
      toast.error("Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-teal-600/90" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-12 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold">GENKI</h1>
              <p className="text-white/80">Área do Locatário</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Gerencie suas Reservas
          </h2>

          <p className="text-white/80 mb-8 max-w-md">
            Acesse sua conta para visualizar disponibilidade das salas,
            fazer novas reservas e gerenciar seus agendamentos.
          </p>

          <div className="space-y-4">
            {[
              "Visualize a disponibilidade em tempo real",
              "Reserve salas com poucos cliques",
              "Pague de forma segura online",
              "Gerencie suas reservas facilmente",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="text-2xl font-display font-bold text-slate-900">
              <span className="text-primary">GENKI</span> Clínica
            </Link>
            <p className="text-slate-600 text-sm mt-1">Área do Locatário</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Bem-vindo de volta</CardTitle>
                  <CardDescription>
                    Entre com suas credenciais para acessar sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="seu@email.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Sua senha"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        Lembrar de mim
                      </label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Esqueceu a senha?
                      </a>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Entrando..." : "Entrar"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Criar Conta</CardTitle>
                  <CardDescription>
                    Preencha seus dados para se cadastrar como locatário
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          value={registerData.nome}
                          onChange={(e) => setRegisterData({ ...registerData, nome: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="seu@email.com"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                      <p className="text-xs text-slate-500">Ex: usuario@gmail.com, usuario@hotmail.com</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            id="telefone"
                            placeholder="(11) 99999-9999"
                            value={registerData.telefone}
                            onChange={(e) => setRegisterData({ ...registerData, telefone: formatTelefone(e.target.value) })}
                            className="pl-10"
                            maxLength={15}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="profissao">Profissão</Label>
                        <Input
                          id="profissao"
                          placeholder="Ex: Fisioterapeuta"
                          value={registerData.profissao}
                          onChange={(e) => setRegisterData({ ...registerData, profissao: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="conselho">Registro Profissional</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="conselho"
                          placeholder="Ex: CREFITO 12345-F"
                          value={registerData.conselho}
                          onChange={(e) => setRegisterData({ ...registerData, conselho: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="Sua senha"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirme"
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Indicadores de validação de senha */}
                    {registerData.password && (
                      <div className="bg-slate-50 p-3 rounded-lg space-y-2">
                        <p className="text-xs font-medium text-slate-600">Sua senha deve conter:</p>
                        <div className="space-y-1 text-xs">
                          <div className={`flex items-center gap-2 ${passwordValidation.hasMinLength ? 'text-green-600' : 'text-slate-400'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasMinLength ? 'bg-green-100' : 'bg-slate-200'}`}>
                              {passwordValidation.hasMinLength && '✓'}
                            </div>
                            Mínimo 6 caracteres
                          </div>
                          <div className={`flex items-center gap-2 ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-slate-400'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasUpperCase ? 'bg-green-100' : 'bg-slate-200'}`}>
                              {passwordValidation.hasUpperCase && '✓'}
                            </div>
                            Uma letra maiúscula (A-Z)
                          </div>
                          <div className={`flex items-center gap-2 ${passwordValidation.hasLowerCase ? 'text-green-600' : 'text-slate-400'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasLowerCase ? 'bg-green-100' : 'bg-slate-200'}`}>
                              {passwordValidation.hasLowerCase && '✓'}
                            </div>
                            Uma letra minúscula (a-z)
                          </div>
                          <div className={`flex items-center gap-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-slate-400'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasNumber ? 'bg-green-100' : 'bg-slate-200'}`}>
                              {passwordValidation.hasNumber && '✓'}
                            </div>
                            Um número (0-9)
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="rounded mt-1" required />
                      <span className="text-sm text-slate-600">
                        Li e aceito os{" "}
                        <a href="#" className="text-primary hover:underline">
                          Termos de Uso
                        </a>{" "}
                        e a{" "}
                        <a href="#" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                      </span>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Cadastrando..." : "Criar Conta"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-slate-600 hover:text-primary">
              <ArrowLeft className="w-4 h-4 inline mr-1" />
              Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
