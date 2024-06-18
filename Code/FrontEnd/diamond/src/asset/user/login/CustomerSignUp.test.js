import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Signup from '../Signup/Signup';


describe('CustomerSignUp Component', () => {
    test('Successful SignUp ', async () => {
    
  
      render(
        <Router>
          <Signup />
        </Router>
      );
      
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'justinnnn@gmail.com' } });
      fireEvent.change(screen.getByLabelText("Password"), { target: { value: '123456' } });
      fireEvent.change(screen.getByLabelText(/FirstName/i), { target: { value: 'BI' } });
      fireEvent.change(screen.getByLabelText(/LastName/i), { target: { value: 'BIN' } });
      fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'vn' } });
      fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '0999999996' } });
      fireEvent.click(screen.getByRole('button', { name: /Sign Up/i, type: 'submit' }));
  
      await waitFor(() =>  expect(window.location.pathname).toBe("/"));
    });
    test('Password Confirm not match', async () => {
    
  
      render(
        <Router>
          <Signup />
        </Router>
      );
      
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'justinnnn@gmail.com' } });
      fireEvent.change(screen.getByLabelText("Password"), { target: { value: '123456' } });
      fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: '12345' } });
      fireEvent.change(screen.getByLabelText(/FirstName/i), { target: { value: 'BI' } });
      fireEvent.change(screen.getByLabelText(/LastName/i), { target: { value: 'BIN' } });
      fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'vn' } });
      fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '0999999996' } });
      fireEvent.click(screen.getByRole('button', { name: /Sign Up/i, type: 'submit' }));
  
      await waitFor(() => expect(screen.getByText(/Your password confirm does not match your password!/i)).toBeInTheDocument());
    });
    test('Fail Register', async () => {
    
  
      render(
        <Router>
          <Signup />
        </Router>
      );
      
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: 'hieudmse173419@fpt.edu.vn' } });
      fireEvent.change(screen.getByLabelText("Password"), { target: { value: '123456' } });
      fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: '123456' } });
      fireEvent.change(screen.getByLabelText(/FirstName/i), { target: { value: 'Justin' } });
      fireEvent.change(screen.getByLabelText(/LastName/i), { target: { value: 'Dooo' } });
      fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'vn' } });
      fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '0999999999' } });
      fireEvent.click(screen.getByRole('button', { name: /Sign Up/i, type: 'submit' }));
  
      await waitFor(() => expect(screen.getByText(/Invaild Account/i)).toBeInTheDocument());
    });
  });