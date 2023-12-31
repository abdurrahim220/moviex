import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </Provider>
);
