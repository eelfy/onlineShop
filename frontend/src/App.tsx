import { Outlet } from "react-router-dom"
import cn from './App.module.scss'
import { Header } from "./features/Header"
import { Footer } from "./features/Footer"

function App() {
  return <div className={cn.wrapper}>
    <Header />

    <section className={cn.content}>
      <Outlet />
    </section>

    <Footer />
  </div>
}

export default App
