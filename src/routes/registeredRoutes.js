import { Redirect } from "react-router-dom";
import Test from "../components/tset";
import Signin from "../components/Signin";
import Error from "../components/Error";

export const registeredRoutes = {
    "/": {
        component: <Test />,
        isAuthRequired: true,
        notAuthComponent: <Signin onErrorPath="/error" />,
    },
    "/auth": {
        component: <h1>auth</h1>,
        isAuthRequired: true,
    },
    "/error": {
        component: <Error />,
        isAuthRequired: false,
    },
    "": {
        component: <Redirect to="/"></Redirect>,
        isAuthRequired: false,
    },
};
