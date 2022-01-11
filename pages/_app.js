
import { SizeMe } from 'react-sizeme';

// import '../styles/timeline.css';
import '../styles/tailwind.css';
import { Header, Footer, Head } from '../components/complicated';
import pages from '../data/pages.json';

function MyApp({ Component, pageProps }) {
  return (
    <SizeMe>
      {({ size }) => {
        const newProps = {
          lgView: size.width >= 900,
          input: pages,
          ...pageProps,
        };
        return (
          <div>
            <Head head={newProps.input.head}></Head>
            <Component {...newProps} />
          </div>
        );
      }}
    </SizeMe>
  );
}

export default MyApp;
