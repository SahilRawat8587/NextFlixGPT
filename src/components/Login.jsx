import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/Validate';

const Login = () => {

    // State to toggle between sign-in and sign-up forms
    // Initially set to true for sign-in form
    // If you want to start with the sign-up form, set it to false
    const[isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);  

    // Refs to access input values
    // Using useRef to avoid unnecessary re-renders
    const email = useRef(null);
    const password = useRef(null);

    // Function to toggle the sign-in form
    
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }

    const handleButtonClick = () => {
       // Validate the form Data

       const message = checkValidData( email.current.value, password.current.value);
       setErrorMessage(message);

         // If the message is null, it means validation passed
         //sign in or sign up logic can be added here

    }

    const inputClass = 'p-4 my-4 w-full bg-gray-700';

  return (
    <div className=''>
        <Header />
        <div className='absolute -z-10 h-screen w-full'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
         alt="MainBanner"
         className='object-cover h-full w-full' />
        </div>
        <form
        onSubmit={(e) => e.preventDefault()}
         className='absolute p-12 bg-black  w-3/12 mx-auto right-0 left-0 my-36 rounded-lg shadow-lg text-white opacity-90'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && ( <input 
            type="text" 
            placeholder='Full Name' 
            className={inputClass}/>)}

            <input 
            ref={email}
            type="text" 
            placeholder='Email Address' 
            className={inputClass} />


            <input 
            ref={password}
            type="password" 
            placeholder='Password' 
            className={inputClass} />

            <p className='py-2 text-xs text-red-700'>{errorMessage}</p>

            <button type='submit' className='p-4 my-6 rounded-lg bg-red-700 w-full' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className='py-4 text-sm cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm 
                ? "New to  Nextflix? Sign Up Now!" 
                : "Already Registered? Sign In Now!"}
            </p>

        </form>
        
    </div>
  )
}

export default Login;
