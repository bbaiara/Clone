import { useNavigate } from 'react-router-dom'
import './index.css'
export default function Signin() {
    const navigate=useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='signin'>
            <div className='card'>
                <h3>Login</h3>
                <form onSubmit={onSubmit}>
                    <div className='sign_card_input' >
                        <input className='card_input' type='email' formNoValidate minLength={6} placeholder='Email' />
                        <input className='card_input' formNoValidate minLength={6} type='password' placeholder='Password' />
                        <button type='submit' >Login</button>
                        <button id="forgot_button">Forgot password? <span>Click to reset</span></button>
                        <button id="register" onClick={()=>navigate('/sign-up')}>No account? <span>Register</span></button>
                    </div>
                </form>
                <div className='divider'>
                    <span/>
                    <p>Or</p>
                    <span/>
                </div>
                <button className='social_login'>Login with Google</button>
            </div>
        </div>
    )
}