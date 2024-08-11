import { createBrowserRouter } from "react-router-dom"

// Routes
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { CarDetail } from "./pages/Car"
import { Dashboard } from "./pages/Dashboard"
import { New } from "./pages/Dashboard/New"

//Layout
import { Layout } from "./components/layout"

//Controle de rota
import { Private } from "./routes/private"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/car/:id", element: <CarDetail /> },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
      {
        path: "/dashboard/new",
        element: (
          <Private>
            <New />
          </Private>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
])
