// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import Counter from '.';
import userEvent from '@testing-library/user-event';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    const { user } = render(<Counter />);

    const currentCount = screen.getByTestId('current-count');
    expect(currentCount).toHaveTextContent('0');

    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(currentCount).toHaveTextContent('1');
  },
);
