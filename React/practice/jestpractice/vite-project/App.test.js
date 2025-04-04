import React from 'react';  
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './src/App';
import '@testing-library/jest-dom'; 



test('should show permission denied message if permission is not granted', async () => {
  render(<App />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'denied' } });

  await waitFor(() => expect(screen.getByText(/Permission not granted./i)).toBeInTheDocument());
});

test('should show protected content when permission is granted', async () => {
  render(<App />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'granted' } });

  await waitFor(() => expect(screen.getByText(/Permission granted!/i)).toBeInTheDocument());

  const protectedContent = screen.getAllByText(/Protected Content/i);
  expect(protectedContent.length).toBeGreaterThan(0); 
});
