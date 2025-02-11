import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../contexts/ThemeContextProvider';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
