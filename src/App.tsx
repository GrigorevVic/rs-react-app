import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404/notFoundPage';
import { Layout } from './components/layout/Layout';
import { MainPage } from './pages/main/MainPage';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { PageDetails } from './pages/details/pageDetails';

export function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />}>
              <Route path="" element={<PageDetails />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
