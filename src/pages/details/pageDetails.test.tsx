import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageDetails } from './pageDetails';

describe('pageDetails Component', () => {
  test('render pageDetails', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['?page=1&details=10']}>
        <PageDetails />
      </MemoryRouter>
    );
    const element = container.querySelector('.loader-container');
    expect(element).toBeInTheDocument();
  });
});
