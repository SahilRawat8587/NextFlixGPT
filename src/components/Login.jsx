import { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';


const Login = () => {

    // State to toggle between sign-in and sign-up forms
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

        if(message) return;

         // Proceed with sign-in or sign-up logic
         if(!isSignInForm) {

            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                 // Signed up 
                    const user = userCredential.user;
                    console.log("User signed up successfully:", user);
                     // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                 const errorMessage = error.message;
                 setErrorMessage(errorCode+ ":"+ errorMessage);
                 });
         }  
        else {
            // Sign In Logic
            }

    };

    const inputClass = 'p-4 my-4 w-full bg-gray-700 rounded-md';

  return (
    <div className='relative min-h-screen'>

        <Header />

        {/*Background image for the login page */}
        <div className='absolute inset-0 -z-10 '>
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
            alt="MainBanner"
            className='object-cover h-full w-full' />
        </div>

        {/* Login Form */}
        <div className='flex justify-center items-center min-h-screen px-4 '>
        <form
        onSubmit={(e) => e.preventDefault()}
        className='bg-black/90 p-8 sm:p-12 rounded-lg text-white w-full max-w-md shadow-xl'
        >
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

            {errorMessage &&<p className='py-2 text-xs text-red-700'>{errorMessage}</p>}

            <button 
            type='submit' 
            className='p-4 my-6 rounded-lg bg-red-700 hover:bg-red-800 cursor-pointer w-full' 
            onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className='py-4 text-sm text-gray-300 hover:underline cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm 
                ? "New to  Nextflix? Sign Up Now!" 
                : "Already Registered? Sign In Now!"}
            </p>

        </form>
        
        </div>
        
    </div>
  )
}

export default Login;
