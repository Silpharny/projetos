import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { register } from "swiper/element/bundle"

register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { Toaster } from "react-hot-toast"

import { AuthProvider } from "./contexts/authContext.tsx"

// Arquivos de rota
import { RouterProvider } from "react-router-dom"
import { router } from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
