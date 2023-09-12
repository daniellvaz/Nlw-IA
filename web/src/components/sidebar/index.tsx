import { FileVideo, Upload, UploadCloud, Wand2 } from "lucide-react";

import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import * as Select from "@/components/ui/select";
import { Slider } from "../ui/slider";


export function Sidebar() {
  return (
    <aside className="w-80 space-y-6 ">
      <form className="space-y-4"> 
        <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-white/5">
          <FileVideo className="w-4 h-4"/>
          Selecione um video
        </label>

        <input 
          id="video" 
          type="file" 
          name="video" 
          accept="video/mp4" 
          className="sr-only" 
        />

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="transcription_prompt">
            Propt de transcrição
          </Label>
          <Textarea 
            id="transcription_prompt" 
            className="h-18 leading-relaxed"
            placeholder="Inclua palavas chaves mencionadas no video separadas pro vírgula (,)"
          />

        </div>
        <Button variant="outline" className="w-full">
          Carregar video
          <Upload  className="w-4 h-4 ml-2"/>
        </Button>
      </form>

      <Separator />

      <form className="space-y-4">
        <div className="space-y-2">
          <Label>Prompt</Label>
          <Select.Select>
            <Select.SelectTrigger>
              <Select.SelectValue placeholder="Selecione um prompt" />
            </Select.SelectTrigger>
            <Select.SelectContent>
              <Select.SelectItem value="title">
                Título do Youtube
              </Select.SelectItem>
              <Select.SelectItem value="description">
                Descrição do Youtube
              </Select.SelectItem>
            </Select.SelectContent>
          </Select.Select>
        </div>
        <div className="space-y-2">
          <Label>Modelo</Label>
          <Select.Select defaultValue="gp3.5">
            <Select.SelectTrigger>
              <Select.SelectValue />
            </Select.SelectTrigger>
            <Select.SelectContent>
              <Select.SelectItem value="gpt3.5">
                GPT 3.5-turbo 16k
              </Select.SelectItem>
            </Select.SelectContent>
          </Select.Select>

          <span className="block text-xs text-muted-foreground italic">
            Você poderá customizar essa opção em breve
          </span>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Temperatura</Label>
          <Slider 
            min={0}
            max={1}
            step={0.1}
          />
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros.
          </span>
        </div>

        <Separator />

        <Button variant="secondary" className="w-full">
          Executar
          <Wand2 className="w-4 h-4 ml-2" />
        </Button>
        <Button className="w-full">
          Fazer upload no Youtube
          <UploadCloud className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </aside>
  )
}