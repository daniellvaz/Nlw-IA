import { useState } from "react"
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { TokenResponse } from "@react-oauth/google"
export function useAuthenticate() {

  const [isAuthenticate, setIsAuthenticate] = useState(() => {
    const { token } = parseCookies();

    if(!token) {
      return false
    }

    return true
  })

  const signIn = async (token: Omit<TokenResponse, "error" | "error_description" | "error_uri">) => {
    setCookie(null, 'token', JSON.stringify(token.access_token));
    setIsAuthenticate(true);
  }

  const signOut = async () => {
    destroyCookie(null, 'token');
    setIsAuthenticate(false);
  }

  return {
    isAuthenticate,
    signIn,
    signOut
  }
}