import { useAuth } from "oidc-react";
import { Redirect } from "react-router";

const Authenticate = ({ children, isRequired, whenNotAuthComponent }) => {
    const auth = useAuth();

    if (!isRequired) {
        return children;
    }

    if (auth && auth.userData) {
        return children;
    }

    return whenNotAuthComponent || <Redirect to="/"></Redirect>;
};

export default Authenticate;
