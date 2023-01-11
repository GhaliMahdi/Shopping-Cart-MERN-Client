import  {  useState } from "react";
import { Routes, Route } from "react-router-dom"
import {Home} from './Home'
import {CreateProduct} from "./pages/createProduct"
import {Products} from "./pages/Products"
import React from "react";
import {Header} from "./components/Header";
import { CartPage } from "./pages/CartPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import { useEffect } from "react";

export const ShoppingCartContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  const cartState = useState([]);
  const userState = useState(() => {
    const userInLocalStorage = localStorage.getItem("user");
    return userInLocalStorage ? JSON.parse(userInLocalStorage) : {};
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userState[0]))
  }, userState);
  
  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <ShoppingCartContext.Provider value={cartState} >
          <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                {userState[0].token && <Route path="/create-product" element={ <CreateProduct /> } /> }
                <Route path="/view-products" element={ <Products /> } />
                <Route path="/cart" element={ <CartPage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/logout" element={ <LogoutPage /> } />
            </Routes>
        </ShoppingCartContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
