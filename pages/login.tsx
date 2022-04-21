import React, { useState } from 'react';
import useUser from 'lib/useUser';
import { Header, Layout, LoginForm } from 'components/complicated/Admin';
import fetchJson, { FetchError } from 'lib/fetchJson';
import Router, { useRouter } from 'next/router';

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/admin',
    redirectIfFound: true,
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const router = useRouter();

  async function handleSubmit(input: LoginFormUserData) {
    setLoading(true);
    await fetch('api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (res.status === 200) {
          Router.push('/admin');
          return
        }
        setLoading(false);
        return;
      })
      .catch((err) => {
        setLoading(false);
      });
    return;
  }
  return (
    <React.Fragment>
      <Header />
      {loading ? (
        ''
      ) : (
        <LoginForm
          onSubmit={handleSubmit}
          buttonText={`Войти`}
          // redirectButton={{ link: '/register', buttonText: 'регистрация' }}
        />
      )}
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Login;
