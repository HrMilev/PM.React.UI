import { useAuth } from "oidc-react";
import { useHistory } from "react-router-dom";
import css from "./Signin.module.scss";

const Signin = ({ onErrorPath }) => {
    const auth = useAuth();
    const history = useHistory();

    const onError = (e) => {
        console.log(e);
        history.push(onErrorPath + "/" + e.message);
    };

    return (
        <section className={css.singin_container}>
            <button
                onClick={() =>
                    auth.userManager.signinRedirect().catch((e) => onError(e))
                }
            >
                Sign in!
            </button>
        </section>
    );
};

export default Signin;
