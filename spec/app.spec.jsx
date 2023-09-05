/* eslint-disable no-undef */
import 'jest-environment-jsdom';

import {
  render, screen, cleanup,
} from '@testing-library/react';

import React from 'react';
import App from '../client/src/components/App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  test('Should display candidates name', async () => {
    const header = await screen.getByText('Dillon Armstrong');
    console.log(header)
    expect(header).toBeVisible();
  });
});
