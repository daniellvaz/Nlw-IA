import { TokenResponse } from "@react-oauth/google";
import { ReactNode, createContext, useContext } from "react";
import { useAuthenticate } from "./hooks/useAuthenticate";

interface Props {
  children: ReactNode;
}

interface Context {
  isAuthenticate: boolean;
  signIn: (token: Omit<TokenResponse, "error" | "error_description" | "error_uri">) => Promise<void>,
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as Context)

export function AuthProvider({ children }: Props) {
  const { isAuthenticate, signIn, signOut } = useAuthenticate()

  return <AuthContext.Provider value={{ isAuthenticate, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)