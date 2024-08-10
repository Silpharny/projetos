import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

// Arquivos de rota
import { RouterProvider } from "react-router-dom"
import { router } from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
