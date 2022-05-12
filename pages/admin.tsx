import { Header } from '../components/complicated/Admin';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
// redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { AdminPanel } from 'components/complicated/Admin';

interface AdminProps {
  user: {
    isLoggedIn: boolean;
    isAdmin: boolean;
  };
}

const Admin = (props:AdminProps) => {
  const { user } = props;
  return (
    <>
      <Header />
      {user?.isLoggedIn && (
        <Provider store={store}>
          {' '}
          <AdminPanel />
        </Provider>
      )}
    </>
  );
};

export default Admin;

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  //@ts-ignore
  const user = req.session.user || null;
  console.log(`\\\\\\\\\\\\\\\\\\\\\\\\\n 🚀 ${user} \n\\\\\\\\\\\\\\\\\\\\\\\\\n`);

  if (user === undefined) {
    return {
      props: {
        user: { isLoggedIn: false, isAdmin: false },
      },
    };
  }

  return {
    //@ts-ignore
    props: { user: req.session.user === undefined ? null : req.session.user },
  };
}, sessionOptions);
