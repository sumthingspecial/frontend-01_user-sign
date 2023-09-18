import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "layouts/App";
import SignIn from "layouts/SignIn";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "redux/store";
import SignUp from "layouts/SignUp";
import FindPassword from "layouts/FindPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}></Provider>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/find-password" element={<FindPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
