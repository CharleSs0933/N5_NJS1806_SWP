import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../../pages/user/Home/Header';
import '@testing-library/jest-dom';



describe('CustomerLogout Component', () => {
    test('Successful Logout', async () => {
      localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
      render(
        <Router>
          <Header />
        </Router>
      );
      fireEvent.click(screen.getByTestId('user-dropdown-button'));
      fireEvent.click(screen.getByText(/logout/i));
        await waitFor(() =>  expect(window.location.pathname).toBe("/"));
    });
   
    test('Logout and Clear User Data', async () => {
      localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
      render(
        <Router>
          <Header />
        </Router>
      );
      fireEvent.click(screen.getByTestId('user-dropdown-button'));
      fireEvent.click(screen.getByText(/logout/i));
        await waitFor(() => 
          expect(localStorage.getItem('user')).toBeNull());
    });
  });