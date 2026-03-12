import { render, screen } from '@testing-library/react';
import Wajahat from './wajahat';

test('renders learn react link', () => {
  render(<Wajahat />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
