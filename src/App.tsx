import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { ErrorBoundary } from './components/ErrorBoundary';

export function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  );
}
