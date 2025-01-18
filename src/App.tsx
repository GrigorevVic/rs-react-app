import './App.css';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}
