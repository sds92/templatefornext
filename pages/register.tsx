import React from 'react';
import useUser from 'lib/useUser';
import { Header, Layout, RegForm } from 'components/complicated/Admin';
import fetchJson, { FetchError } from 'lib/fetchJson';
import Router, { useRouter } from 'next/router';

interface RegisterProps {
  user: string;
}

const Register: React.FC<RegisterProps> = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  async function handleSubmit(input: RegFormUserData) {
    setLoading(true);
    await fetch('api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        Router.push('/login');
      }
    });
    return;
  }
  return (
    <React.Fragment>
      <Header />
      {loading ? (
        <p>loading</p>
      ) : (
        <RegForm
          onSubmit={handleSubmit}
          buttonText={`Зарегистрироваться`}
          redirectButton={{ link: '/login', buttonText: 'вход' }}
        />
      )}
    </React.Fragment>
  );
};

export default Register;
