// Login.js
import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/firebase_config';
import google from '../Assets/images/google.jpg'
import facebook from '../Assets/images/fb.png'

const GoogleButton = ({ signinHandler}) => {
    return (<button className='w-full text-xl'
        onClick={signinHandler}>
            <span><img src={google} className='h-8 my-auto inline float-left ml-4'/></span>
        <p className=''>Sign in with Google</p>
    </button>)
}
const FacebookButton = ({ signinHandler}) => {
    return (<button className='w-full text-xl'
        onClick={signinHandler}>
            <span><img src={facebook} className='h-8 my-auto inline float-left ml-4'/></span>
        <p className=''>Sign in with Facebook</p>
    </button>)
}
const GmailSignIn = ({ }) => {
    return <div className='flex flex-col w-full'>
        <label className='text-start'>Email</label>
        <input type='email' className='w-full  mx-auto px-4 py-2 rounded-md' />
        <label className='text-start'>Password</label>
        <input type='password' className='w-full mx-auto px-4 py-2 rounded-md' />
        <button>Login</button>
    </div>
}

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const signInWithGoogle = async (e) => {
        e.preventDefault()
        setLoading(true);
        const provider = new GoogleAuthProvider();

        try {
            signInWithPopup(auth, provider)
                .then(res => {
                    console.log(res);
                    setUser(res);
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                    console.log(e);
                })
        } catch (error) {
            setLoading(false)
            console.log(error.message);
        }


    };

    return (
        <div className='text-center w-full flex justify-center items-center bg-dark-2 h-screen bg-opacity-90 overflow-hidden'>



            {!loading ? <div>
                <h2 className='text-3xl'>Sign In</h2>
                <GoogleButton    signinHandler={signInWithGoogle} />
                <FacebookButton  signinHandler={signInWithGoogle} />
                <GmailSignIn />
            </div>
                :
                <div class="relative flex justify-center items-center mt-12 text-center">
                    <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-expense-light text-lg loading'>Loading</p>
                    <div class="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-dark-1">  </div>
                </div>}
        </div>
    );
};

export default Login;
