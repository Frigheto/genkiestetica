import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Users, Mail, Lock, User, Phone } from "lucide-react";
import { toast } from "sonner";

interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  telefone?: string;
  profissao?: string;
  password: string;
}

export default function ClientesCadastrados() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Verificar se está autenticado como admin
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    // Carregar usuários registrados do localStorage
    loadUsers();
  }, [navigate]);

  const loadUsers = () => {
    const registeredUsers = localStorage.getItem("registeredUsers");
    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      setUsers(parsedUsers);
    }
  };

  // Filtrar usuários baseado na busca
  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.telefone?.includes(searchTerm) ||
      user.profissao?.toLowerCase().includes(searchLower)
    );
  });

  const handleDeleteUser = (userId: string) => {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      toast.success("Usuário excluído com sucesso!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-genki-forest flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GENKI</h1>
                <p className="text-sm text-gray-500">Gerenciador de Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Users className="w-8 h-8 text-genki-forest" />
            Clientes Cadastrados
          </h2>
          <p className="text-gray-600 mt-2">Visualize e gerencie todos os usuários registrados no sistema</p>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Clientes</CardTitle>
              <Users className="w-4 h-4 text-genki-forest" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-gray-500">Usuários registrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Buscando</CardTitle>
              <Search className="w-4 h-4 text-genki-forest" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredUsers.length}</div>
              <p className="text-xs text-gray-500">Resultados encontrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Últimos 7 dias</CardTitle>
              <Badge variant="outline" className="text-genki-forest border-genki-forest">Novos</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter((u) => {
                  const userId = parseInt(u.id.replace("user-", ""));
                  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
                  return userId > sevenDaysAgo;
                }).length}
              </div>
              <p className="text-xs text-gray-500">Novos cadastros</p>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buscar Clientes</CardTitle>
            <CardDescription>Pesquise por nome, email, telefone ou profissão</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Digite para buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Clientes</CardTitle>
            <CardDescription>
              {filteredUsers.length === 0 && users.length > 0
                ? "Nenhum resultado encontrado para sua busca"
                : `${filteredUsers.length} cliente${filteredUsers.length !== 1 ? "s" : ""} encontrado${filteredUsers.length !== 1 ? "s" : ""}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredUsers.length === 0 && users.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Nenhum cliente cadastrado</h3>
                <p className="text-gray-500">Os clientes que se registrarem no site aparecerão aqui.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Profissão</TableHead>
                      <TableHead>Senha</TableHead>
                      <TableHead>Data Cadastro</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-genki-forest/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-genki-forest" />
                            </div>
                            {user.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3 text-gray-400" />
                            {user.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-3 h-3 text-gray-400" />
                            {user.telefone || "-"}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.profissao || "Não informado"}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                            <Lock className="w-3 h-3 text-gray-400" />
                            {user.password}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {new Date(parseInt(user.id.replace("user-", ""))).toLocaleDateString("pt-BR")}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Excluir
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
