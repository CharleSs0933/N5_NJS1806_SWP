import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './userLogin';
import '@testing-library/jest-dom';


describe('CustomerLogin Component', () => {
  
  test('renders login form', () => {
    render(
      <Router>
        <UserLogin />
      </Router>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i, type: 'submit' })).toBeInTheDocument();
  });

  test('wrong username or password', async () => {
    render(
      <Router>
        <UserLogin />
      </Router>
    );
    
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jusn@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });

    fireEvent.click(screen.getByRole('button', { name: /Login/i, type: 'submit' }));

    await waitFor(() => expect(screen.getByText(/Wrong username or password/i)).toBeInTheDocument());

  });
 
  test('successful form will be direct to homePage ', async () => {
  

    render(
      <Router>
        <UserLogin />
      </Router>
    );
    
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'justin@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });

    fireEvent.click(screen.getByRole('button', { name: /Login/i, type: 'submit' }));

    await waitFor(() =>  expect(window.location.pathname).toBe("/"));
  });

});





















 
  // test('Direct to Profile', async () => {
  //   localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
  //   render(
  //     <Router>
  //       <Header />
  //     </Router>
  //   );
  //   fireEvent.click(screen.getByTestId('user-dropdown-button'));
  //   fireEvent.click(screen.getByText(/Manage Account/i));
  //     await waitFor(() => 
  //       expect(window.location.pathname).toBe('/ManageAccount'));
  // });

  // test('View Profile', async () => {
  //   localStorage.setItem('user', JSON.stringify({ 
  //     FirstName: 'John',
  //     LastName: 'Doe',
  //     Email: 'john.doe@example.com',
  //     Location: 'New York',
  //     Password: 'password',
  //     Phone: '1234567890',
  //     id: "1"
  //   }));
  
  //   render(
  //     <Router>
  //       <ManageAccount />
  //     </Router>
  //   );
  
  //   await waitFor(() => {
 
      
  //     expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
  //     expect(screen.getByText(/New York/i)).toBeInTheDocument();

  //     expect(screen.getByText(/1234567890/i)).toBeInTheDocument();
   
  //   });
      
  
  


  // });
  // test('Edit Profile Button Visibility', async () => {
  //   localStorage.setItem('user', JSON.stringify({ 
  //     FirstName: 'John',
  //     LastName: 'Doe',
  //     Email: 'john.doe@example.com',
  //     Location: 'New York',
  //     Password: 'password',
  //     Phone: '1234567890',
  //     id: "1"
  //   }));
  
  //   render(
  //     <Router>
  //       <ManageAccount />
  //     </Router>
  //   );
  
  //   expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  // });
  // test('Enter Edit Mode', async () => {
  //   localStorage.setItem('user', JSON.stringify({ 
  //     FirstName: 'John',
  //     LastName: 'Doe',
  //     Email: 'john.doe@example.com',
  //     Location: 'New York',
  //     Password: 'password',
  //     Phone: '1234567890',
  //     id: "1"
  //   }));
  
  //   render(
  //     <Router>
  //       <ManageAccount />
  //     </Router>
  //   );
  
  //   fireEvent.click(screen.getByText(/Edit/i));
  
  //   expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  // });
  
 
  // test('Cancel Edit', async () => {
  //   localStorage.setItem('user', JSON.stringify({ 
  //     FirstName: 'John',
  //     LastName: 'Doe',
  //     Email: 'john.doe@example.com',
  //     Location: 'New York',
  //     Password: 'password',
  //     Phone: '1234567890',
  //     id: "1"
  //   }));
  
  //   render(
  //     <Router>
  //       <ManageAccount />
  //     </Router>
  //   );
  
  //   fireEvent.click(screen.getByText(/Edit/i));
  //   fireEvent.click(screen.getByText(/Cancel/i));

  //   expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
  //   expect(screen.getByText(/New York/i)).toBeInTheDocument();

  //   expect(screen.getByText(/1234567890/i)).toBeInTheDocument();
  // });
  
  
