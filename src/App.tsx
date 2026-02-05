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
import ScrollToTop from "./components/common/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./components/auth/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<DefaultLayout fixedHeader={true} />}>
            <Route path="/" element={<Navigate to="/mall" replace />} />
            <Route path="/mall" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route element={<DefaultLayout fixedHeader={false} />}>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/mall/:categoryName"
              element={<ProductCollectionPage />}
            />
            <Route path="/:productName" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
