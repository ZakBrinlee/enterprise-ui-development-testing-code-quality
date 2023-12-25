import { render as _render, screen } from 'test/utilities';
import {PackingList} from '.';
import { createStore } from './store';
import { Provider } from 'react-redux';

const renderWithProvider = (ui: React.ReactElement) => {
  return _render(ui, { wrapper: ({ children }) => <Provider store={createStore()}>{children}</Provider> });
}

it('renders the Packing List application', () => {
  renderWithProvider(<PackingList />);
});

it('has the correct title', async () => {
  renderWithProvider(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  renderWithProvider(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    renderWithProvider(<PackingList />);
    const input = screen.getByLabelText('New Item Name');
    const button = screen.getByRole('button', { name: /add new item/i });
    
    expect(input).toHaveValue('');
    expect(button).toBeDisabled();
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    const {user} = renderWithProvider(<PackingList />);
    const input = screen.getByLabelText('New Item Name');
    const button = screen.getByRole('button', { name: /add new item/i });
    
    expect(input).toHaveValue('');

    await user.type(input, 'Socks');

    expect(button).not.toBeDisabled();
  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    const {user} = renderWithProvider(<PackingList />);
    const input = screen.getByLabelText('New Item Name');
    const button = screen.getByRole('button', { name: /add new item/i });
    
    expect(input).toHaveValue('');

    await user.type(input, 'socks');    
    await user.click(button);

    expect(screen.getByLabelText('socks')).not.toBeChecked();
    expect(input).toHaveValue(''); 
  },
);
