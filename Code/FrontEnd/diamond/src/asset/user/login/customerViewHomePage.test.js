import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './userLogin';
import Header from '../../../pages/user/Home/Header';
import '@testing-library/jest-dom';
import ManageAccount from './ManageAccount';
import Signup from '../Signup/Signup';

describe('View Home PageComponent', () => {
    ///
    test('Successful Load Home Page', async () => {
      localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
      render(
        <Router>
          <Header />
        </Router>
      );
      fireEvent.click(screen.getByTestId('HOME-button'));
      await waitFor(() =>  expect(window.location.pathname).toBe("/"));
    });
  });