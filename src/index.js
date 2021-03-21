import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "oidc-react";

import "./index.css";
import App from "./components/App";
import { config } from "./oidc/config";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider {...config}>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
