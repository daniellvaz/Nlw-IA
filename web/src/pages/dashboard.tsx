import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Separator } from "@/components/ui/separator" ;
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import * as Select from "@/components/ui/select";

export function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 🧡 no NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed" 
              placeholder="Inclua o prompt para a ia.."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed" 
              placeholder="Resultado gerado pela ia"
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variavel 
            <code className="text-violet-400">
              {' {trasciption} '}
            </code> 
            no seu prompt para adiconar o contenudo da transcricao do video selecionado
          </p>
        </div>
        <aside className="w-80 space-y-6 ">
          <form className="space-y-6"> 
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
            <Button className="w-full">
              Carregar video
              <Upload  className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
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

            <Button className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}