import { Routes, Route } from "react-router-dom"
import Home from './Home'
import CreateProduct from "./pages/createProduct"


function App() {

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create-product" element={ <CreateProduct /> } />
      </Routes>
    </div>
  )
}

export default App
