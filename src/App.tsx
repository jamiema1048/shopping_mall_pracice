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
import DefaultLayout from "./components/layout/DefaultLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout fixedHeader={true} />}>
          <Route path="/" element={<Navigate to="/mall" replace />} />
          <Route path="/mall" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<DefaultLayout fixedHeader={false} />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/mall/:categoryName"
            element={<ProductCollectionPage />}
          />
          <Route path="/:productName" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
