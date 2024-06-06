import React from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Features from "./Components/Features/Features.tsx";
import BestSelling from "./Components/BestSelling/BestSelling.tsx";
import CTA from "./Components/CTA/CTA.tsx";

// Pages
import SignInPage from "./Pages/SignInPage.tsx";
import SignUpPage from "./Pages/SignUpPage.tsx";
import ForgetPassword from "./Pages/ForgetPasswordPage.tsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import ProfileAccountDetailPage from "./Pages/ProfileAccountDetailPage.tsx";
import ProfileOrdersPage from "./Pages/ProfileOrdersPage.tsx";
import ProfilePasswordPage from "./Pages/ProfilePasswordPage.tsx";
import ProfileAddressPage from "./Pages/ProfileAddressPage.tsx";
import ProfileWishlistPage from "./Pages/ProfileWishlistPage.tsx";
import Layout from "./Pages/Layout.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="myaccount" element={<Layout />}>
          <Route path="password" element={<ProfilePasswordPage />} />
          <Route path="address" element={<ProfileAddressPage />} />
          <Route path="wishlist" element={<ProfileWishlistPage />} />
          <Route path="orders" element={<ProfileOrdersPage />} />
          <Route path="account-detail" element={<ProfileAccountDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
