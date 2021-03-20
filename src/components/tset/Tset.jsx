import React from "react";
import { useAuth } from "oidc-react";

const Tset = () => {
    const auth = useAuth();
    if (auth && auth.userData) {
        return (
            <div>
                <strong>Logged in! 🎉</strong>
                <br />
                <button onClick={() => auth.userManager.signoutRedirect()}>
                    Log out!
                </button>
                <button
                    onClick={() =>
                        fetch("https://localhost:5000/api/todo?page=1", {
                            headers: {
                                Authorization:
                                    "Bearer " + auth.userData.access_token,
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                        })
                            .then((response) => response.json())
                            .then((data) => console.log(data))
                    }
                >
                    Log out!
                </button>
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
