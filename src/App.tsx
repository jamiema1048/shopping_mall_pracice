import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mall" replace />} />
        <Route path="/mall" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route path="/:productName" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
