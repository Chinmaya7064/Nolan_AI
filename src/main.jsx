import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-nk5caj3wphlwwc4q.us.auth0.com"
      clientId="r83q33Z6USXv6NXLvAkzYqHSYHenu8tO"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
)
