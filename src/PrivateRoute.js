import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Comp, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                window.localStorage.getItem("user") ? (
                    <Comp {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login", state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRoute;