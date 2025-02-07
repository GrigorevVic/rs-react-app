import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { MemoryRouter } from 'react-router-dom';

describe('MainPage Component', () => {
  test('render MainPage', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['?page=1']}>
        <MainPage />
      </MemoryRouter>
    );
    const element = container.querySelector('.main');
    expect(element).toBeInTheDocument();
  });
});
