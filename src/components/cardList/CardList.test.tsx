import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { MemoryRouter } from 'react-router-dom';
import { mockedCharacters } from '../../test/mocks';

describe('CardList component', () => {
  test('CardList component displays the correct list of cards', () => {
    render(
      <MemoryRouter>
        <CardList peopleList={mockedCharacters.peopleList} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(10);
  });

  test('if there is no data, displays a message', () => {
    render(
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Nothing found for your request')
    ).toBeInTheDocument();
  });
});
