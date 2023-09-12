import { Textarea } from "@/components/ui/textarea";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
        
        <Sidebar />
      </main>
    </div>
  )
}