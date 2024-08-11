import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { AuthProvider } from "./contexts/authContext.tsx"

// Arquivos de rota
import { RouterProvider } from "react-router-dom"
import { router } from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
