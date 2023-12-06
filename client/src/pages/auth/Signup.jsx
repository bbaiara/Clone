import { useNavigate } from 'react-router-dom'
import './index.css'
export default function Signup(){
    const navigate=useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='signin'>
            <div className='card'>
                <h3>Account Sign up</h3>
                <form onSubmit={onSubmit}>
                    <div className='sign_card_input' >
                        <input className='card_input' formNoValidate minLength={6} placeholder='First Name' />
                        <input className='card_input' formNoValidate minLength={6} placeholder='Last Name' />
                        <input className='card_input' formNoValidate minLength={6} placeholder='Student ID' />
                        <input className='card_input' placeholder='Department' />
                        <input className='card_input' formNoValidate minLength={6} type='email' placeholder='Email' />
                        <input className='card_input' formNoValidate minLength={6} type='password' placeholder='Password' />
                        <input className='card_input' formNoValidate minLength={6} type='password' placeholder='Confirm Password' />
                        <button type='submit' >Register</button>
                    </div>
                </form>
                <div className='divider'>
                    <span/>
                    <p>Or</p>
                    <span/>
                </div>
                <button className='social_login'>Sign up with Google</button>
            </div>
        </div>
    )
}