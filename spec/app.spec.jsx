import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import {
  expect, describe, test, beforeEach, afterEach,
} from 'jest';

import React from 'react';
import App from '../client/src/components/App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  test('Should display candidates name', async () => {
    const header = await screen.getByDisplayValue('Dillon Armstrong');
    expect(header).toExist();
  });
});
