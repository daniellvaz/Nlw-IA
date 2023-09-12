import { Dashboard } from "@/pages/dashboard";
import { Route, Routes } from "react-router-dom";

export function Authenticated() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}