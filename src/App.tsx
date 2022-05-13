import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Equipamentos from "./pages/Equipamentos";
import Cadastro from "./pages/Cadastro/Cadastro";


function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
