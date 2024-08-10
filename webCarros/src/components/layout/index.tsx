import { Container } from "../container"
import { Header } from "../header"

import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
