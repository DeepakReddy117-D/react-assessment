// Sign In 
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useInput from "./useInput";
import "../Home/Home.css";




// Card B
import img from "../Home/HomeImg/safety-shield.png";
import imgA from "../Home/HomeImg/social-distance.png";
import imgB from "../Home/HomeImg/face-mask.png";
import imgC from "../Home/HomeImg/sanitizer.png";
import imgD from "../Home/HomeImg/blanket.png";
import imgE from "../Home/HomeImg/hot-food.png";
import { useNavigate } from "react-router-dom";
// Footer

function Home() {
    const navigate = useNavigate()
    // Sign In Component 
    // Username 
    const { value: username,
        isValid: usernameIsValid,
        hasEror: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsername }
        = useInput(value => value.trim() !== "");


    // Password
    const { value: password,
        isValid: passwordIsValid,
        hasEror: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword }
        = useInput(value => value.trim() !== "");


    //  Form Submition Handling

    let formIsValid = false;

    // if (usernameIsValid && passwordIsValid) {
    //    formIsValid = true;
    // }

    const Data = JSON.parse(localStorage.getItem("userSignup"));



    const OnFormSubmit = event => {
        event.preventDefault();
        
        if (!usernameIsValid && !passwordIsValid) {
            return;
        }
        toast.success("success");
        const signUpUsername = Data?.filter((value) => value.name === username);
        const signUpPassword = signUpUsername?.filter((value) => value.password === password);
        // setTimeout(()=>{
            if (usernameIsValid && passwordIsValid && signUpUsername && signUpPassword) {
                navigate("/bus");
                formIsValid = true;
                resetUsername("");
                resetPassword("");
        

        }    else {
            toast.error("user doesnot exist Please Sign Up ");
        }
        // },1000);
     
        
    };
    // Username Error Msg Styles 
    const usernameInputClasses = usernameHasError ? "form-controle-invalid" : "form-controle";
    // Password Error Msg Styles
    const passwordInputClasses = passwordHasError ? "form-controle-invalid" : "form-controle";






    return (
        < div className="m-0 container-fluid">
          
          {/* Sign In Componenet */}
          <div className="sign">  
                <div>
                <form className="mt-4 formbg " onSubmit={OnFormSubmit}>
                    <div className=" d-flex  ">
                        <div className={usernameInputClasses}>
                            <label htmlFor="username" className="mx-5 signlab text-dark"> Username </label>
                            <input type="text"
                                id="username"
                                className="mx-2 homelab"
                                value={username}
                                onBlur={usernameBlurHandler}
                                onChange={usernameChangeHandler} />
                            {usernameHasError && <p className="error-text">Username mus not be Empty . </p>} </div>


                        <div className={passwordInputClasses}>
                            <label htmlFor="username" className="mx-5 signlab text-dark " > Password </label>
                            <input type="text"
                                id="username"
                                className="mx-2"
                                value={password}
                                onBlur={passwordBlurHandler}
                                onChange={passwordChangeHandler} />
                            {passwordHasError && <p className="error-text">Password  must not be Empty . </p>}
                        </div>
                        <div className="form-actions">
                            <button className="btnSubmit btn-success mx-5 " >
                                Sign In
                            </button>
                            {/* disabled={!formIsValid} */}

                        </div>
                    </div>
                </form>
            </div>
         </div>

            {/* Caed A */}


            <h3 className="text-center  text-success mx-2 mt-3 mb-5"> The Numbers are Growing...!</h3>
            <div className="cards row mt-2 border border-white">
                <div className="row">
                    <div className="col-sm">
                        <div className="card  border border-white p-5">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold ">Customers</h5>
                                <h4 className="card-title2 text-danger "> 10 M   </h4>
                                <p className="card-textOne"><small className="text-muted">Explore is trusted by over 8 million happy customers globally.</small></p>
                                {/* <p className="card-textOne"><small className="text-muted"> </small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                        <div className="card col-sm border border-white p-5">
                            <div className="card-body">
                                <h5 className="card-title  font-weight-bold">Operators</h5>
                                <h4 className="card-title2 text-danger ">2300 </h4>
                                <p className="card-textOne"><small className="text-muted">Network of over 2300 bus operators worldwide.</small></p>
                                {/* <p className="card-textOne"><small className="text-muted"></small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                        <div className="card col-sm border border-white p-5">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Bus Tickets </h5>
                                <h4 className="card-title2 text-danger "> 120  M +  </h4>
                                <p className="card-textOne"><small className="text-muted">Over 120 million trips booked using Explore.</small></p>
                                {/* <p className="card-textOne "><small className="text-muted"></small></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Card B */}


            <div className="mx-2 mt-4">
                <hr className="bg-secondary p-1 " />
                <div className="row m-3 mx-5 ">
                    <div className="col-sm-8">  <div className="card border border-white p-3 ">
                        <div className="card-body">

                            <h5 className="card-title text-success font-weight-bold mb-3  "> <u>COVID-19 Related Travel Advisory </u></h5>
                            <p className="card-text "><mark>Explore</mark> recommends that all passengers follow Covid Safety Guidelines. Maintaining strict safety protocols can ensure that the virus spread is in control. Travellers must make sure to wear double masks, use hand sanitisers and keep their distance from others.</p>
                            <p className="card-text">Look out for our bus services while booking your tickets. These bus services are handpicked and they follow all the safety protocols - regular bus fumigation, availability of hand sanitisers, passenger temperature screening before onboarding, staff that is well educated about the safety protocols.</p>
                            <p className="card-text" >Follow our travel updates to know the up to date travel guidelines in the country. Refer to State-wise COVID-19 Travel Guidelines in India for detailed information.</p>
                        </div>
                    </div>

                        <div className="card-group border border-white ">

                            <div className="card border border-white m-1">
                                <img src={img} className="card-img-top" alt="Safety Image" />
                                <div className="card-body">
                                    <p className="card-text">Choose safe-T  Bus Partner </p>
                                </div>
                            </div>


                            <div className="card border border-white m-1">
                                <img src={imgB} className="card-img-top" alt="Wear a Mssk" />
                                <div className="card-body">
                                    <p className="card-text">Wear A Mask</p>
                                </div>
                            </div>

                            <div className="card border border-white m-1">
                                <img src={imgC} className="card-img-top" alt="Carry a Sanitizer" />
                                <div className="card-body">
                                    <p className="card-text">Carry Sanitaizer</p>
                                </div>
                            </div>

                            <div className="card border border-white m-1">
                                <img src={imgD} className="card-img-top" alt="Carry own Blanket" />
                                <div className="card-body">
                                    <p className="card-title">Carry own Blanket </p>
                                </div>
                            </div>

                            <div className="card border border-white m-1">
                                <img src={imgA} className="card-img-top" alt="Safe Distence" />
                                <div className="card-body">
                                    <p className="card-text">Maintain Safe Distence</p>
                                </div>
                            </div>


                            <div className="card border border-white m-1">
                                <img src={imgE} className="card-img-top" alt="Eat hot Food " />
                                <div className="card-body">
                                    <p className="card-text">Eat Hot Coocked Food  </p>
                                    <p className="card-text"> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 mx-5 mt-3">
                        <img src="https://static.abhibus.com/img/homepage/home-2.png " alt="Traveller image  " />
                    </div>
                </div>
            </div>

      <ToastContainer position="top-center"/>
           
        </div>
    );
}
export default Home;