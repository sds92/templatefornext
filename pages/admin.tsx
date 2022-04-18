import { Header } from '../components/complicated/Admin';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import type { AppProps } from 'next/app';
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

const Admin: React.FC<AdminProps> = (props) => {
  console.log('🚀 ~ file: admin.tsx ~ line 10 ~ props', props);
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
  // const name =
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
