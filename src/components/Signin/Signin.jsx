import { useAuth } from "oidc-react";
import { useHistory } from "react-router-dom";
import css from "./Signin.module.scss";

const Signin = ({ onErrorPath }) => {
    const auth = useAuth();
    const history = useHistory();

    const onError = () => {
        history.push(onErrorPath);
    };

    return (
        <section className={css.singin_container}>
            <button
                onClick={() =>
                    auth.userManager.signinRedirect().catch((e) => onError())
                }
            >
                Sign in!
            </button>
        </section>
    );
};

export default Signin;
