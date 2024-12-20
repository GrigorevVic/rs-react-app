import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404/notFoundPage';
import { Layout } from './components/layout/Layout';
import { MainPage } from './pages/main/MainPage';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';

export function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
