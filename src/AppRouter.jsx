import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { useIsAdminHook } from "./hooks/IsAdminHook";
import { CartPage } from "./pages/CartPage";
import { CreateProduct } from "./pages/createProduct";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import Products from "./pages/Products";
import { RegisterPage } from "./pages/RegisterPage";

export const AppRouter = () => {
    const isAdmin = useIsAdminHook();

    return (
        <Routes>
                    <Route path="/" element={ <Home /> } />
                    {isAdmin && <Route path="/create-product" element={ <CreateProduct /> } /> }
                    <Route path="/view-products" element={ <Products /> } />
                    <Route path="/cart" element={ <CartPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/logout" element={ <LogoutPage /> } />
            </Routes>
    )
}