import './styles.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ThemeProvider } from '../contexts/ThemeContextProvider';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars Characters</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pages Router educational project at the RSS"
        />
      </Head>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}
