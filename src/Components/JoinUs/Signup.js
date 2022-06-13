import useInput from "../Home/useInput";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../JoinUs/JoinUs.css";
import { Link ,useNavigate } from "react-router-dom";
import  {useState} from "react";
function Signup(){ 
    const [user, setUSer] = useState([])
    const navigate = useNavigate()

    // Sign up Component
// const signupData=[];
    // Username 
    const { value: username,
       isValid: usernameIsValid,
       hasEror:usernameHasError,
        valueChangeHandler: usernameChangeHandler,
         inputBlurHandler: usernameBlurHandler ,
      reset:resetUsername}
          = useInput(value => value.trim() !== "");
   

       // Gmail  
       const { value: gmail,
        isValid: gmailIsValid,
        hasEror:gmailHasError,
         valueChangeHandler: gmailChangeHandler,
          inputBlurHandler: gmailBlurHandler ,
       reset:resetGmail}
           = useInput(value => value.trim() !== "");
    

    // Password
    const { value: password,
       isValid: passwordIsValid,
       hasEror:passwordHasError,
        valueChangeHandler: passwordChangeHandler,
         inputBlurHandler: passwordBlurHandler ,
      reset:resetPassword}
          = useInput(value => value.trim() !== "");
   
   

   //  Form Submition Handling
   
   let formIsValid = false;
   
   if (usernameIsValid && passwordIsValid && gmailIsValid) {
      formIsValid = true;
   }
   
   const OnFormSubmit = event => {
      event.preventDefault();
      if (!usernameIsValid && !passwordIsValid && !gmailIsValid) {
          return;
      }

      toast.success(" You are Succesfully Signed in ");
      setTimeout(()=>{
         const newUser = {name: username, password, gmail }
             setUSer(preUser => {
            return [...preUser, newUser]
    })
 //    using Local Storage 
       localStorage.setItem("signinData",JSON.stringify([...user, newUser]) )
       localStorage.setItem("userSignup",JSON.stringify([...user, newUser]) )

 

      },3000)
      navigate("/bus");
      
   };



   // Username Error Msg Styles 
   const usernameInputClasses = usernameHasError ? "form-controle-invalid" : "form-controle";

       // Gmail Error Msg Styles
   const gmailInputClasses = gmailHasError ? "form-controle-invalid" : "form-controle";

   // Password Error Msg Styles
   const passwordInputClasses = passwordHasError ? "form-controle-invalid" : "form-controle";
   
       return (

<div className="signup ">
      <div className=" formdiv row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card  bg-transparent text-white border-0 rounded">
            <div className="card-body own p-5 first text-center">          
   <form className="   " onSubmit={OnFormSubmit}>
   <div className=" ">   
   <p className="title mb-4">
                  Please enter your Details.!
                </p>
             <div className={usernameInputClasses}>
                           <label htmlFor="username" className=" text-white"> Username : </label>
                 <input type="text"
                  id="username"
                  className="mx-3"
                   value={username}
                    onBlur={usernameBlurHandler}
                     onChange={usernameChangeHandler} />
                 {usernameHasError && <p className="error-text">Username must not be Empty . </p>} </div>
   
        
                 <div className={gmailInputClasses}>
                 <label htmlFor="gmail"  className="mx-3 mt-3 text-white" > Gmail : </label>
                 <input type="text"
                  id="gmail"
                  className="mx-2"
                   value={gmail}
                    onBlur={gmailBlurHandler}
                     onChange={gmailChangeHandler} />
                 {gmailHasError && <p className="error-text">Gmail   must not be Empty . </p>}
             </div>


             <div className={passwordInputClasses}>
                 <label htmlFor="username"  className="mt-3 text-white" > Password :</label>
                 <input type="text"
                  id="username"
                  className=" mx-3"
                   value={password}
                    onBlur={passwordBlurHandler}
                     onChange={passwordChangeHandler} />
                 {passwordHasError && <p className="error-text mt-2">Password  must not be Empty . </p>}
             </div>


             <div className="form-actions">
                 <button disabled={!formIsValid}  style={{backgroundColor: "black", color:"#fff"}} className="btn mt-3  pt-1 pb-1 ">
                     Sign up
                 </button>
             </div>
             </div>
             <div>
                <p  className="mt-2 bg-dark btn-success ">
                  Already have an account?
                  <Link to="/">Sign In</Link>
                </p>
              </div>
         </form>
              </div>

     
            </div>
          </div>
          </div>
      <ToastContainer position="top-center"/>

          </div>
       );
}
export default Signup;