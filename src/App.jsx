import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home/Home"
import { Map } from "./components/Map"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocorrencias" element={<Map />} />
        <Route path="/performance" element={<Home />} />
        <Route path="/energy-losses" element={<Home />} />
        <Route path="/analises" element={<Home />} />
        <Route path="/relatorios" element={<Home />} />
        <Route path="/config" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
