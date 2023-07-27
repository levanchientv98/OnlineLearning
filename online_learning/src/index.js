import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById("root"));
Kommunicate.init("3a1d761215ad1b7f2e3a4de228cf7e813", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
       position="top-center"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light" />
    </BrowserRouter>{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
