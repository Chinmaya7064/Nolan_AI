import * as React from 'react';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import { useAuth0 } from "@auth0/auth0-react";

export default function AccountDemoSignedIn() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const authentication = React.useMemo(() => {
    return {
      signIn: () => loginWithRedirect(),
      signOut: () => logout({ returnTo: window.location.origin }),
    };
  }, [loginWithRedirect, logout]);

  // Update session only if the user is authenticated
  const session = isAuthenticated ? { user } : null;

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        <Account />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
