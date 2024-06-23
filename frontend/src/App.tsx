import { Outlet, useLocation } from "react-router-dom"
import cn from './App.module.scss'
import { Header } from "./features/Header"
import { Footer } from "./features/Footer"
import { observer } from "mobx-react-lite"
import { useStore } from "./entities/Store"
import { useEffect } from "react"
import { Api } from "./shared/api/Api"

const App = observer(() => {
  const { MainStore: { updateCategories } } = useStore()

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    Api.getCategories().then(categories => {

      updateCategories(categories)
    })
  }, [updateCategories]);

  return <div className={cn.wrapper}>
    <Header />

    <section className={cn.content}>
      <Outlet />
    </section>

    <Footer />
  </div>
})

export default App
