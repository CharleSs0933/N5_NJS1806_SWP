import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        location: "",
        phone_number: "",
        id: '100' // Make sure this ID is correct and exists in your MockAPI
    });
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const checkPasswordConfirm = () => {
        if (user.password !== passwordConfirm) {
            setError("Your password confirm does not match your password!");
        } else {
            setError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== passwordConfirm) {
            setError("Your password confirm does not match your password!");
            return;
        }
        try {
            if(!user.email.includes(`@gmail`))  {
                setError(`Invaild Account`);
                return;
               }
            const response = await fetch(`https://6660044b5425580055b1c21d.mockapi.io/Assignment/User`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Email: user.email,
                    FirstName: user.first_name,
                    LastName: user.last_name,
                    Location: user.location,
                    Password: user.password,
                    Phone: user.phone_number,
                    id: user.id
                })
                
            });
           

            console.log(user);

            if (response.ok) {
                navigate('/');
            }
           
            
        } catch (error) {
            console.error('Error updating user data:', error);
            setError('An error occurred while updating the account.');
        }
    };

    const handleClickCancel = () => {
        navigate("/login");
    };

    return (
        <div className='wrapperrrr'>
            {error && (<Alert key='danger' variant='danger'>
                {error}
            </Alert>)}
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group row'>
                    <div className='col-sm-6'>
                        <label htmlFor='first_name' className='text-start'>FirstName</label>
                        <input
                            className='form-control'
                            type='text'
                            id='first_name'
                            name='first_name'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='col-sm-6 '>
                        <label htmlFor='last_name' className='text-start'>LastName</label>
                        <input
                            className='form-control'
                            type='text'
                            id='last_name'
                            name='last_name'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='email' className='text-start'>Email</label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='text-start'>Password</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        value={user.password}
                        onChange={handleInputChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password_confirm' className='text-start'>Confirm Password</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password_confirm'
                        name='password_confirm'
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        onBlur={checkPasswordConfirm}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone_number' className='text-start'>Phone Number</label>
                    <input
                        className='form-control'
                        type='text'
                        id='phone_number'
                        name='phone_number'
                        value={user.phone_number}
                        onChange={handleInputChange}
                        minLength={10}
                        maxLength={10}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='location' className='text-start'>Location</label>
                    <input
                        className='form-control'
                        type='text'
                        id='location'
                        name='location'
                        value={user.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="text-center">
                    <input type="submit" value="Sign Up" className="btn btn-primary m-3 col-sm-3" />
                    <input
                        type="button"
                        value="Cancel"
                        className="btn btn-secondary"
                        id="buttonCancel col-sm-3"
                        onClick={() => handleClickCancel()}
                    />
                </div>
            </form>
        </div>
    );
}

export default Signup;