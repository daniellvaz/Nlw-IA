import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "@/context/auth"
import { Authenticated } from "./authenticate.routes"
import { Unauthenticated } from "./unauthenticate.routes"

export function Router() {
  const { isAuthenticate } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuthenticate) {
      navigate('/')
    }
  }, [isAuthenticate])

  return isAuthenticate ? <Authenticated /> : <Unauthenticated /> 
}