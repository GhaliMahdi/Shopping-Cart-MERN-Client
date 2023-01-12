import  {  useState } from "react";
import React from "react";
import {Header} from "./components/Header";
import { useEffect } from "react";
import { AppRouter } from "./AppRouter";

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
          <AppRouter />
        </ShoppingCartContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
