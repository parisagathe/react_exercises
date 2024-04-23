import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);