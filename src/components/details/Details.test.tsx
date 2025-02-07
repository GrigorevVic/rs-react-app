import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Details } from './Details';
import { mockedCharacters } from '../../test/mocks';

describe('Details Component', () => {
  test('hides the details section when the close button is clicked', () => {
    render(
      <MemoryRouter>
        <Details character={mockedCharacters.peopleList[0]} />
      </MemoryRouter>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });
});
