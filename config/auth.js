import { WebAuth } from 'auth0-js';

export const webAuth = new WebAuth({
    clientID: 'NhVV2IVnlGvIw7AdWk3vOFucYe9N8bFS',
    domain: 'https://dev-ofb1ufg6.us.auth0.com',
    redirectUri: 'https://ueofp.sse.codesandbox.io/',
    responseType: 'token',
  });