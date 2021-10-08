import styles from '../styles/Home.module.css';
import { WebAuth } from 'auth0-js';

export default function Home() {
  const webAuth = new WebAuth({
    clientID: 'NhVV2IVnlGvIw7AdWk3vOFucYe9N8bFS',
    domain: 'https://dev-ofb1ufg6.us.auth0.com',
    redirectUri: 'http://localhost.com',
    responseType: 'token',
  });

  const handleAuth = () => {
    webAuth.passwordlessStart(
      {
        connection: 'email',
        send: 'code',
        email: 'demlabz@gmail.com',
      },
      function (err, res) {
        console.log(err);
        console.log(res);
      }
    );
  };

  const handleVerifyToken = () => {
    webAuth.passwordlessLogin(
      {
        connection: 'email',
        email: 'demlabz@gmail.com',
        verificationCode: '531959',
      },
      function (err, res) {
        console.log(err);
        console.log(res);
      }
    );
  };

  return (
    <div className={styles.container}>
      <form>
        <input type='email' className={styles.input} />
        <button className={styles.copy}>Get Coupon</button>
      </form>
      <form>
        <input type='email' className={styles.input} />
        <button className={styles.copy}>Get Coupon</button>
      </form>
      <button onClick={handleAuth}>Auth0</button>
      <button onClick={handleVerifyToken}>Token</button>
    </div>
  );
}
