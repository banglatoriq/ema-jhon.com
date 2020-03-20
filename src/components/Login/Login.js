import React from 'react';
import './Login.css';
import Auth from './useAuth';


const Login = () => {
    const auth =Auth();
    const handelSignIn = ()=>{
        auth.signInWithGoogle()
        .then(res=>{
            window.location.pathname='/review';
        })
    }
    const handelSignOut = ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Join the Duwa for Corona Virus</h1>
            {
                auth.user ? <button onClick={handelSignOut}>Sign out</button>:
                <button onClick={auth.signInWithGoogle}>Sign In With Google</button>
            
            }
        </div>
    );
};

export default Login;