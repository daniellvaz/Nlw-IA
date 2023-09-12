import "./index.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from "./context/auth/index.tsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
