import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FaqPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/Routes.js";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
} from "./routes/ShopRoutes";
import Store from "./redux/store.js";
import { loadSeller, loadUser } from "./redux/actions/user.js";
import ProtectedRoute from "./routes/ProtectedRoute.js";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SelllerProtectedRoute.js";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token" //this is a the reader
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          {/* for protected Routes  */}
          {/* <Route
              path="/profile"
              element={
                <ProtectedRoute >
                  <ProfilePage />
                </ProtectedRoute>
              }
            /> */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* shop route */}
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />

          <Route
            path="/shop/:id"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopHomePage />
            //   </SellerProtectedRoute>
            // }
            element={<ShopHomePage />}
          />
          <Route
            path="/dashboard"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopDashboardPage />
            //   </SellerProtectedRoute>
            // }
            element={<ShopDashboardPage />}
          />
          <Route
            path="/dashboard-create-product"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopCreateProduct />
            //   </SellerProtectedRoute>
            // }
            element={<ShopCreateProduct />}
          />
          <Route
            path="/dashboard-products"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopAllProducts />
            //   </SellerProtectedRoute>
            // }
            element={<ShopAllProducts />}
          />
          <Route
            path="/dashboard-create-event"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopCreateEvents />
            //   </SellerProtectedRoute>
            // }
            element={<ShopCreateEvents />}
          />
          <Route
            path="/dashboard-events"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopAllEvents />
            //   </SellerProtectedRoute>
            // }
            element={<ShopAllEvents />}
          />
          <Route
            path="/dashboard-coupouns"
            // element={
            //   <SellerProtectedRoute>
            //     <ShopAllCoupouns />
            //   </SellerProtectedRoute>
            // }
            element={<ShopAllCoupouns />}
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
};

export default App;
