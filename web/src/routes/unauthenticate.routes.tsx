import { Index } from "@/pages";
import { Route, Routes } from "react-router-dom";


export function Unauthenticated() {
  return (
    <Routes>
      <Route path='/' element={<Index />}/>
    </Routes>
  )
}