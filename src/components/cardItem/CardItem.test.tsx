import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardItem } from './CardItem';
import { MemoryRouter } from 'react-router-dom';
import { mockedCharacters } from '../../test/mocks';

describe('Card component', () => {
  test('the card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <CardItem people={mockedCharacters.peopleList[0]} />
        <CardItem people={mockedCharacters.peopleList[9]} />
      </MemoryRouter>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  });
});
