import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { toastConfig } from "./utils/helper.js";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer {...toastConfig} />
      <App />
    </Provider>
  </StrictMode>
);
