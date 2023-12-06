import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import './index.css'
export default function Signin({ setUser, setAuthState }) {
    const navigate=useNavigate()
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const onSubmit=(e)=>{
    //     console.log("Submit clicked")
    //     e.preventDefault()
    // }

    const handleSignIn = async () => {
        try {
        // Placeholder for sign-in logic
        const response = await signInApiCall({ email, password });

        // Check if the sign-in was successful (adjust according to your API response)
        if (response.success) {
            // Assuming the response includes user data
            setUser(response.userData);

            // Set authentication state to 'authenticated'
            setAuthState('authenticated');

            navigate('/home');

        } else {
            // Handle sign-in failure (show error message, etc.)
            console.error('Sign-in failed:', response.error);
        }
        } catch (error) {
        console.error('Error during sign-in:', error);
        }
    };
    const handleGoogleSignIn = () => {
        console.log('Google Sign in clicked');
        window.location.href = 'http://localhost:3001/auth/google';
    };

    const signInApiCall = async () => {
        try {
            console.log(email, password)
            console.log("API call")
        const response = await fetch('http://localhost:3001/user/sign-in', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
            return {
            success: true,
            userData: data.userData,
            };
        } else {
            return {
            success: false,
            error: data.error || 'Sign-in failed',
            };
        }
        } catch (error) {
        console.error('Error during sign-in:', error);
        return {
            success: false,
            error: 'Internal Server Error',
        };
        }
    };
    
    return (
        <div className='signin'>
            <div className='card'>
                <h3>Login</h3>
                <div>
                        <div className='sign_card_input' >
                        <input className='card_input' type='email' formNoValidate 
                        minLength={6} 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className='card_input' formNoValidate minLength={6} 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSignIn}>Login</button>
            
                        <button id="forgot_button">Forgot password? <span>Click to reset</span></button>
                        <button id="register" onClick={()=>navigate('/sign-up')}>No account? <span>Register</span></button>
                    </div>

                </div>

                <div className='divider'>
                    <span/>
                    <p>Or</p>
                    <span/>
                </div>
                <button className='social_login' onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
        </div>
    )
}