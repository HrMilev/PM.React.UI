import React from "react";
import { useAuth } from "oidc-react";
import { useHistory } from "react-router-dom";

const Tset = () => {
    const auth = useAuth();
    const history = useHistory();

    const routeChange = () => {
        let path = `/ddd`;
        history.push(path);
    };
    if (auth && auth.userData) {
        return (
            <div>
                <strong>Logged in! 🎉</strong>
                <br />
                <button onClick={() => auth.userManager.signoutRedirect()}>
                    Log out!
                </button>
                <button onClick={routeChange}>Log out!</button>
            </div>
        );
    }
    return (
        <button onClick={() => auth.userManager.signinRedirect()}>
            Log in!
        </button>
    );
};

export default Tset;
