import { useState, useRef } from 'react';
import { Upload, X, Link, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import imageCompression from 'browser-image-compression';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface ImageUploaderProps {
  photos: { id: string; url: string; titulo?: string; ordem: number }[];
  onPhotosChange: (photos: { id: string; url: string; titulo?: string; ordem: number }[]) => void;
  maxPhotos?: number;
}

export function ImageUploader({ photos, onPhotosChange, maxPhotos = 5 }: ImageUploaderProps) {
  const [urlInput, setUrlInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Converte arquivo para base64
   */
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  /**
   * Comprime imagem antes de salvar
   */
  const compressImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 0.5, // Máximo 500KB
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error('Erro ao comprimir imagem:', error);
      return file;
    }
  };

  /**
   * Handle upload de arquivo
   */
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (photos.length >= maxPhotos) {
      toast.error(`Você já atingiu o limite de ${maxPhotos} fotos`);
      return;
    }

    const remainingSlots = maxPhotos - photos.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);

    setIsUploading(true);

    try {
      const newPhotos = [];

      for (const file of filesToUpload) {
        // Validar tipo
        if (!file.type.startsWith('image/')) {
          toast.error(`${file.name} não é uma imagem válida`);
          continue;
        }

        // Comprimir
        const compressedFile = await compressImage(file);

        // Converter para base64
        const base64 = await fileToBase64(compressedFile);

        // Adicionar à lista
        newPhotos.push({
          id: `photo-${Date.now()}-${Math.random()}`,
          url: base64,
          titulo: file.name.replace(/\.[^/.]+$/, ''),
          ordem: photos.length + newPhotos.length + 1,
        });
      }

      onPhotosChange([...photos, ...newPhotos]);
      toast.success(`${newPhotos.length} foto(s) adicionada(s) com sucesso!`);
      setOpenDialog(false);

      // Limpar input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast.error('Erro ao fazer upload das imagens');
    } finally {
      setIsUploading(false);
    }
  };

  /**
   * Handle adicionar URL externa
   */
  const handleAddUrl = () => {
    if (!urlInput.trim()) {
      toast.error('Digite uma URL válida');
      return;
    }

    if (photos.length >= maxPhotos) {
      toast.error(`Você já atingiu o limite de ${maxPhotos} fotos`);
      return;
    }

    // Validar URL básica
    try {
      new URL(urlInput);
    } catch {
      toast.error('URL inválida');
      return;
    }

    const newPhoto = {
      id: `photo-${Date.now()}`,
      url: urlInput,
      titulo: 'Foto',
      ordem: photos.length + 1,
    };

    onPhotosChange([...photos, newPhoto]);
    setUrlInput('');
    toast.success('Foto adicionada com sucesso!');
    setOpenDialog(false);
  };

  /**
   * Remove uma foto
   */
  const handleRemovePhoto = (id: string) => {
    const updatedPhotos = photos.filter((p) => p.id !== id).map((p, index) => ({
      ...p,
      ordem: index + 1,
    }));
    onPhotosChange(updatedPhotos);
    toast.success('Foto removida');
  };

  return (
    <div className="space-y-4">
      {/* Preview das fotos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden bg-genki-light/10">
              <img
                src={photo.url}
                alt={photo.titulo || 'Foto'}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => handleRemovePhoto(photo.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-xs text-center mt-1 text-muted-foreground truncate">
              {photo.titulo}
            </p>
          </div>
        ))}
      </div>

      {/* Botão para adicionar */}
      {photos.length < maxPhotos && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              Adicionar Foto ({photos.length}/{maxPhotos})
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Foto</DialogTitle>
              <DialogDescription>
                Faça upload de um arquivo ou insira uma URL externa
              </DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Upload
                </TabsTrigger>
                <TabsTrigger value="url">
                  <Link className="h-4 w-4 mr-2" />
                  URL
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Selecione uma imagem</Label>
                  <Input
                    id="file-upload"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    disabled={isUploading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Formatos: JPG, PNG, WEBP. Tamanho máximo: 500KB (compressão automática)
                  </p>
                </div>

                {isUploading && (
                  <p className="text-sm text-genki-forest">Processando imagens...</p>
                )}
              </TabsContent>

              <TabsContent value="url" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="url-input">URL da imagem</Label>
                  <Input
                    id="url-input"
                    type="url"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddUrl()}
                  />
                </div>

                <Button onClick={handleAddUrl} className="w-full">
                  Adicionar URL
                </Button>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}

      {photos.length === 0 && (
        <div className="border-2 border-dashed border-genki-mint/30 rounded-lg p-8 text-center">
          <ImageIcon className="h-12 w-12 mx-auto text-genki-mint/50 mb-4" />
          <p className="text-sm text-muted-foreground">Nenhuma foto adicionada ainda</p>
          <p className="text-xs text-muted-foreground mt-1">
            Clique no botão acima para adicionar fotos
          </p>
        </div>
      )}
    </div>
  );
}
