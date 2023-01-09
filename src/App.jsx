import  {  useState } from "react";
import { Routes, Route } from "react-router-dom"
import {Home} from './Home'
import {CreateProduct} from "./pages/createProduct"
import {Products} from "./pages/Products"
import React from "react";
import {Header} from "./components/Header";
import { CartPage } from "./pages/CartPage";

export const ShoppingCartContext = React.createContext();

function App() {
  const cartState = useState([]);
  return (
    <div className="App">
      
      <ShoppingCartContext.Provider value={cartState} >
      <Header />
        <Routes>
          
            <Route path="/" element={ <Home /> } />
            <Route path="/create-product" element={ <CreateProduct /> } />
            <Route path="/view-products" element={ <Products /> } />
            <Route path="/cart" element={ <CartPage /> } />
        </Routes>
      </ShoppingCartContext.Provider>
    </div>
  )
}

export default App
