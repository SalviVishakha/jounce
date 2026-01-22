import Header from "./components/Header";
import Footer from "./components/Footer";
import Womenpage from "./pages/Womenpage";
import Productdetail from "./pages/Productdetail";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Addtocart from "./pages/Addtocart";
import Shipping from "./pages/Shipping";
import Shipping_policy from "./pages/Shipping_policy";
import Return_policy from "./pages/Return_policy";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Categorybar from "./components/Categorybar";
import Myorder from "./pages/Myorder";
import Tracking from "./pages/Tracking";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSite(true);
    }, 2000); // must match JOUNCE animation time
  }, []);

  return (
    <>
      {/* SPLASH SCREEN */}
      {!showSite && <Hero />}

      {/* FULL WEBSITE AFTER SPLASH */}
      {showSite && (
        <>
          <Header />
          <Categorybar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Home />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/women" element={<Womenpage />} />
            <Route path="/product-details" element={<Productdetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/add-to-cart" element={<Addtocart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/shipping-policy" element={<Shipping_policy />} />
            <Route path="/return-policy" element={<Return_policy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/my-order" element={<Myorder />} />
            <Route path="/track-order" element={<Tracking />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
