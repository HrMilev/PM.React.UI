import { Route } from "react-router-dom";
import { AuthProvider } from "oidc-react";

import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { config } from "./oidc/config";
import Test from "./components/tset";

function App() {
    return (
        <div className="App">
            <AuthProvider {...config}>
                <Route path="/" component={Test} />
                <Button>Ehoo</Button>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </AuthProvider>
        </div>
    );
}

export default App;
