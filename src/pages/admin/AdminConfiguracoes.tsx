import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Settings, Save, Globe, Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useConfiguracoes } from '@/contexts/ConfiguracoesContext';

export default function AdminConfiguracoes() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { config, salvarConfig } = useConfiguracoes();
  const [localConfig, setLocalConfig] = useState(config);

  useEffect(() => {
    setLocalConfig(config);
  }, [config]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await salvarConfig(localConfig);
      toast.success("Configurações salvas com sucesso!");
    } catch (err) {
      toast.error("Erro ao salvar configurações. Tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-genki-forest flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GENKI</h1>
                <p className="text-sm text-gray-500">Configurações do Site</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Settings className="w-8 h-8 text-genki-forest" />
            Configurações do Site
          </h2>
          <p className="text-gray-600 mt-2">Ajuste as configurações gerais do site</p>
        </div>

        <div className="space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Nome e descrição do site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Nome do Site</Label>
                <Input
                  id="siteName"
                  value={localConfig.siteName}
                  onChange={(e) => setLocalConfig({ ...localConfig, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Descrição</Label>
                <Textarea
                  id="siteDescription"
                  value={localConfig.siteDescription}
                  onChange={(e) => setLocalConfig({ ...localConfig, siteDescription: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Dados para contato da clínica</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={localConfig.email}
                  onChange={(e) => setLocalConfig({ ...localConfig, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    value={localConfig.phone}
                    onChange={(e) => setLocalConfig({ ...localConfig, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp (apenas números)</Label>
                  <Input
                    id="whatsapp"
                    value={localConfig.whatsapp}
                    onChange={(e) => setLocalConfig({ ...localConfig, whatsapp: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endereço */}
          <Card>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
              <CardDescription>Localização da clínica</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Endereço Completo
                </Label>
                <Input
                  id="address"
                  value={localConfig.address}
                  onChange={(e) => setLocalConfig({ ...localConfig, address: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  value={localConfig.cep}
                  onChange={(e) => setLocalConfig({ ...localConfig, cep: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Horário de Funcionamento */}
          <Card>
            <CardHeader>
              <CardTitle>Horário de Funcionamento</CardTitle>
              <CardDescription>Horários de atendimento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="horarioSemana" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Segunda a Sexta
                </Label>
                <Input
                  id="horarioSemana"
                  value={localConfig.horarioSemana}
                  onChange={(e) => setLocalConfig({ ...localConfig, horarioSemana: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="horarioSabado">Sábado</Label>
                <Input
                  id="horarioSabado"
                  value={localConfig.horarioSabado}
                  onChange={(e) => setLocalConfig({ ...localConfig, horarioSabado: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Redes Sociais */}
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
              <CardDescription>Links para redes sociais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/genki"
                  value={localConfig.instagram}
                  onChange={(e) => setLocalConfig({ ...localConfig, instagram: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  placeholder="https://facebook.com/genki"
                  value={localConfig.facebook}
                  onChange={(e) => setLocalConfig({ ...localConfig, facebook: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Configurações Avançadas */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações Avançadas</CardTitle>
              <CardDescription>Opções adicionais do site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Modo de Manutenção</Label>
                  <p className="text-sm text-gray-500">
                    Ativa uma página de manutenção temporária
                  </p>
                </div>
                <Switch
                  checked={localConfig.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setLocalConfig({ ...localConfig, maintenanceMode: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Botão Salvar */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => navigate("/admin/dashboard")}>
              Cancelar
            </Button>
            <Button
              className="bg-genki-forest hover:bg-genki-forest/90"
              onClick={handleSave}
              disabled={isLoading}
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Salvando..." : "Salvar Configurações"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
