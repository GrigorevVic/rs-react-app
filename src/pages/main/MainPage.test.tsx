import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('MainPage Component', () => {
  test('render MainPage', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['?page=1']}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    const element = container.querySelector('.main');
    expect(element).toBeInTheDocument();
  });
});
