import { Github, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useAuth } from "@/context/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const onClick = () => {
    signOut();
    navigate('/')
  }

  return (
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
        <Button variant="secondary" onClick={onClick}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )
}