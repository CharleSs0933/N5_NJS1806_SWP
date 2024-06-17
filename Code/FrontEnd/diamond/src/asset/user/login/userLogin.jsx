import React, { useState, useEffect } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './userLogin.scss';
import { useAuth } from '../../../component/Auth/AuthProvider';
import Alert from 'react-bootstrap/Alert';


const UserLogin = () => {
  
    const [error, setError] = useState("");
    const [invalidEmail, setInvalidEmail] = useState("");
    const [invalidPassword, setInvalidPassword] = useState("");
    // const [error, setError] = useState("");
    // const [error, setError] = useState("");
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
    const [user , setUser] = useState(false)
  
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const redirectUrl = location.state?.path || "/";
  
  
    const handleInputChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = async (e) => {
      
      e.preventDefault();
      try {
        const response = await fetch('https://6660044b5425580055b1c21d.mockapi.io/Assignment/User');
        const data = await response.json();
    
        const foundUser = data.find((user) => user.Email === login.email && user.Password === login.password);
        
        if(!login.email.includes(`@gmail.com`)){
          setInvalidEmail(`Invalid Email`)
          
        }
        if(login.password.length < 7){
          setInvalidPassword(`Password must be more than 7 char`)
         
        }
        if (foundUser) {
          setError('')
          setInvalidEmail('')
          setInvalidPassword('')
          setUser(true);
          localStorage.setItem('user', JSON.stringify(foundUser));
          
          navigate('/');
          window.location.reload();
          
        } else {
          setError('Wrong username or password');
          return
        }
      } catch (error) {
        console.log({ error });
        setError('An error occurred. Please try again.');
      }
    };
    
  

    return (
        <div className='wrapperr'>
            <form className='login-form' onSubmit={handleSubmit}>
            {error &&  (<Alert key='danger' variant='danger'>
                            {error}
                    </Alert>)}
                    
                   
                <div className='form-group' >
                    <label htmlFor='email' className='text-start'>email</label>
                    
                    <input 
                        className='form-control'
                        type='email' 
                        id='email' 
                        name='email' 
                        value={login.email}
                        onChange={handleInputChange}
                        required 
                        
                    />
                    {invalidEmail && <p>{invalidEmail}</p>}
                    
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='text-start'>Password</label>
                    <input 
                        className='form-control'
                        type='password' 
                        id='password' 
                        name='password'
                        value={login.password}
                        onChange={handleInputChange}
                        minLength={5}
                        required 
                    />
                     {invalidPassword && <p>{invalidPassword}</p>}
                </div>
                
                <button type='submit' className='login-button'>
                    Login
                </button>
                <div>
                <a href='/sign' className='' style={{ textDecoration: 'none' }}>Create new account</a>
                </div>
            </form>
            
            <div className='alternative-login'>
                <p>Or login with</p>
                <button className='google-login'>
                    <GoogleOutlined /> Google
                </button>
                <button className='facebook-login'>
                    <FacebookOutlined /> Facebook
                </button>
            </div>

            <div cl>

            </div>
          
        </div>
    );
};

export default UserLogin;
