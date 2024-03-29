import { useRef, useState } from "react";
import Header from "./Header";
import { checkValideData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import (auth)
const Login = () =>{
    const [isSignInForm,setIsSignInForm]=  useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
      // validate the form data
     const message = checkValideData(email.current.value,password.current.value,name.current.value)
    setErrorMessage(message);
    if(message) return;

    // Sign In/Sign Up Logic

    if(!isSignInForm){
        // Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
  })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode +"-"+ errorMessage)
  });
    }else{
        // Sign In Logic
            
    }
    };
    return (
    <div>
      <Header  />
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
      alt="logo" />
     </div>
     <form onSubmit = {(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && <input 
        ref={name}
        type="text" 
        placeholder="Full Name"  
        className="p-4 my-4 w-full bg-gray-700" 
        />}
        
        <input 
        ref={email}
        type="text" 
        placeholder="email or phone number" 
        className="p-4 my-4 w-full bg-gray-700" 
        />

        <input
        ref={password} 
        type="password" 
        placeholder="password"  
        className="p-4 my-4 w-full bg-gray-700" 
        />
        
        <p className ="text-red-700 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm 
        ? "New to Netflix? Sign Up Now" 
        : "Already Registered? Sign In Now"}</p>
     </form>
    </div>
    )
}
export default Login;