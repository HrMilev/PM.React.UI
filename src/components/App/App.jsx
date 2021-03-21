import { Switch, Route } from "react-router-dom";

import { registeredRoutes } from "../../routes/registeredRoutes";
import Authenticate from "../Authenticate";
import css from "./App.module.scss";

function App() {
    return (
        <section className={css.app_container}>
            <Switch>
                {Object.entries(registeredRoutes).map(([path, routeSetup]) => (
                    <Route exact path={path} key={path}>
                        <Authenticate
                            isRequired={routeSetup.isAuthRequired}
                            whenNotAuthComponent={routeSetup.notAuthComponent}
                        >
                            {routeSetup.component}
                        </Authenticate>
                    </Route>
                ))}
            </Switch>
        </section>
    );
}

export default App;
