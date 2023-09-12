import { useState } from "react"
import { Authenticated } from "./authenticate.routes"
import { Unauthenticated } from "./unauthenticate.routes"

export function Router() {
  const [isAuthenticated, setIsAuthenticate] = useState(false)

  return isAuthenticated ? <Authenticated /> : <Unauthenticated /> 
  
}