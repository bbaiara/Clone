import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Signup({ setUser, setAuthState }){
    const navigate=useNavigate()


    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [department, setDepartment] = React.useState('');


    const onSubmit=(e)=>{
        console.log("Submit clicked")
        e.preventDefault()
    }

    const signUpApiCall = async ({
        firstName,
        lastName,
        email,
        password,
        studentId,
        department,
    }) => {
        try {
            const response = await fetch('http://localhost:3001/user/sign-up', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstName,
                  lastName,
                  email,
                  password,
                  studentId,
                  department,
                }),
              });
              
    
            if (!response.ok) {
                // Handle error cases here
                const errorData = await response.json();
                console.error('Sign-up error:', errorData.error || 'Unknown error');
                return {
                    success: false,
                    error: errorData.error || 'Sign-up failed',
                };
            }

            const data = await response.json();
            return {
                success: true,
                userData: data,
            };
        } catch (error) {
            console.error('Error during sign-up:', error);
            return {
                success: false,
                error: 'Internal Server Error',
            };
        }
    };

    const handleSignUp = async () => {
        console.log('Handle Sign Up clicked');
      
        try {
          const result = await signUpApiCall({
            firstName,
            lastName,
            email,
            password,
            studentId,
            department,
          });
      
          console.log('Signup result:', result);
      
          // Handle the result as needed
          if (result.success) {
            // User signed up successfully, you might want to perform additional actions
            console.log('Sign-up successful:', result.userData);
            navigate('/home');
          } else {
            // Handle sign-up failure
            console.error('Sign-up failed:', result.error);
          }
        } catch (error) {
          console.error('Error during signup:', error);
        }
      };

    const handleGoogleSignUp = () => {
        console.log('Google Sign up clicked');
        window.location.href = 'http://localhost:3001/auth/google'
       // GoogleApiCall();
    };

    return (
        <div className='signin'>
            <div className='card'>
                <h3>Account Sign up</h3>
                <div>
                    <div className='sign_card_input' >
                        <input className='card_input' formNoValidate minLength={6} placeholder='First Name' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input className='card_input' formNoValidate minLength={6} placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                         />
                        <input className='card_input' formNoValidate minLength={6} placeholder='Student ID' 
                        
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        />
                        <input className='card_input' placeholder='Department'
                        
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}

                        />
                        <input className='card_input' formNoValidate minLength={6} type='email' placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className='card_input' formNoValidate minLength={6} type='password' placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <input className='card_input' formNoValidate minLength={6} type='password' placeholder='Confirm Password' />
                        <button onClick={handleSignUp} >Register</button>
                    </div>
                </div>
                
                <div className='divider'>
                    <span/>
                    <p>Or</p>
                    <span/>
                </div>
                <button className='social_login'  onClick={handleGoogleSignUp} >Sign up with Google</button>
            </div>
        </div>
    )
}