import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

test('renders learn react link', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
