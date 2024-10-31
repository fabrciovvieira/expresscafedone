import FeedBack from "./components/FeedBack"
import Hero from "./components/Hero"
import Menus from "./components/Menus"
import Services from "./components/Services"
import logo from './assets/logoCafe.png'

import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento do background
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos para simular o carregamento

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center bg-bgHero bg-cover bg-no-repeat">
        <div className="text-3xl font-raleway bg-background w-screen h-screen m-auto flex justify-center items-center"><img src={logo} alt="logo" /></div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Services />
      <Menus />
      <FeedBack />
    </>
  )
}

export default App
