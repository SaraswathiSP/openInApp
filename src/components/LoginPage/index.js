import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import './index.css'

import { useNavigate } from 'react-router-dom';

const LoginPage = () =>{
    const history = useNavigate()

    const onClickLoginButton = () =>{
        history("/home")
    }

    return (


        <div className='login-container'>
            <div className='left-container'>
                <h1 className='left-container-text'>Board.</h1>
            </div>
            <div className='right-container'>
            <div className='login-form-container'>
                <h1 className='sign-in-heading'>Sign In</h1>
                <h4 className='sign-in-sub-heading'>Sign into your account</h4>
                <div className='login-buttons'>
                <GoogleOAuthProvider clientId="332887842585-nbd9lt9ldqj6q5ahqdcjaeqbcjtg22r9.apps.googleusercontent.com" style={{marginRight:20}}>
                    <GoogleLogin onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
          />
  
        </GoogleOAuthProvider> 
                </div>
                <div className='login-form'>
                    <label className='label' htmlFor='email'>Email address</label>
                    <input className='input12' id="email" type='text' placeholder='Enter Email address'/>

                    <label className='label' htmlFor='password'>Password</label>
                    <input className='input12' type='password' placeholder='Enter Password'/>
                    <p className='forgot-text'>Forgor Password?</p>
                    <button onClick={onClickLoginButton} className='sign-in-button' type="button">Sign In</button>
                    <p className='register-info'>Don’t have an account? <span>Register here</span></p>
                </div> 
            </div>
            </div>
      </div>
    )
}

export default LoginPage