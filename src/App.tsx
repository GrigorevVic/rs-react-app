import './App.css';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ErrorBoundary>
  );
}
