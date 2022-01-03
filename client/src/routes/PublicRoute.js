import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
          {...rest}
          render={
            ({ location }) => (
              !isAuthenticated ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/home',
                    state: { from: location }
                  }}
                />
              ))
          }
        />
      );
}
