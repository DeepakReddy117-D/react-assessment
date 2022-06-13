import './App.css';
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import LogOut from './Components/Home/LogOut';
import Signup from "./Components/JoinUs/Signup";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import {useHistory} from "react-router-dom";
import LogoImg from "../src/Components/Home/HomeImg/applogo.png";
import "../src/Components/Home/Home.css";
// Footer
import fb from "../src/Components/Home/HomeImg/logo-facebook.svg";
import twitter from "../src/Components/Home/HomeImg/logo-twitter.svg";
import lkdin from "../src/Components/Home/HomeImg/logo-linkedin.svg";
import Bus from './Components/Bus/Bus';
import NotFound from './Components/Home/NotFound';
// import { AllBusList, BusList } from './Components/Bus/ContextApi';


function App() {
  const navigate = useNavigate()
// const user = JSON.parse( localStorage.getItem("signinData"));
// const history=useHistory();
// function logOut(){
//   localStorage.clear();
//   history.push("/home");
// }

// toast.dark("You are Logging Out..!");

const logoutHandler = () => {
    setTimeout(()=>{
      toast.success("Log out")
    localStorage.removeItem("signinData")
    navigate("/");

  },5000);
  }






  return (
    <>
    {/* <BusList.Provider value={BusList}> */}
{/* Navbar */}
      <div className="App d-block ">
        <nav className="nav navbar sticky-top  navbar-expand-sm  bg-dark navbar-dark">
          <div className="container-fluid">
            <img src={LogoImg} className="logo" alt=" Image Logo " />

            {/* <img src={img}  alt=" logo image " className='logo border-rounded' width="30px" height="30px"/> */}
            <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse justify-content-end text-success bg-dark">
              <ul className="nav nav-pills   m-0 p-1">
                <div className='d-flex mx-auto'>
                  <li className="nav-item">
                    <Link className="badge badge-light badge-pill" to='/'>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="badge badge-light badge-pill" to='/signup'>
                      JoinUs
                    </Link>
                  </li>
                  <li className="nav-item" onClick={logoutHandler}>
                    <Link className="badge badge-light badge-pill" to='/signup' >
                      Log Out
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          </nav>
          {/* Routes  */}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<LogOut/>} />
            <Route path='/bus' element={<Bus/>} />
           
            <Route path='*' element={<NotFound/>} />
          </Routes>

          {/* Footer */}

          <div className="container-fluid footer d-block bg-dark text-white mt-1 mb-0">
            <div className="row">
              <div className="col-sm">
                <p className=" text-secondary mt-1"><u>About Explore</u> </p>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Contact Us </li>
                  <li> Offers</li>
                  <li> Coupons</li>
                </ul>
              </div>
              <div className="col-sm">
                <ul className="list-unstyled">

                  <p className=" text-secondary mt-1"><u>Info </u></p>
                  <li>T & C</li>
                  <li>Privacy Policy </li>
                  <li>FAQ</li>
                  <li> Blogs </li>
                </ul>
              </div>
              <div className="col-sm">
                <p className=" text-secondary mt-1"><u>Our Partners </u></p>
                <ul className="list-unstyled">

                  <li>Gobibo</li>
                  <li>MakemyTrip</li>
                  <li></li>
                </ul>
              </div>

              <div className="col-sm">
                <ul className="list-unstyled">
                  <li>    <img src={LogoImg} className="logo mt-1" alt=" Image Logo " /></li>
                  <li>Explore is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.</li>
                  <div className="d-flex mx-5 mt-4">
                    <li><img src={fb} className="footerlogo mx-2 " alt=" Image Logo " /></li>

                    <li><img src={twitter} className="footerlogo mx-2 " alt=" Image Logo " /></li>

                    <li><img src={lkdin} className="footerlogo mx-2 " alt=" Image Logo " /></li>

                  </div>
                </ul>
              </div>
            </div>
            <div className=" text-left mb-2  mx-2"><p >Ⓒ 2022 ibibogroup All rights reserved</p>


            </div>
          </div>


        

      </div>
      {/* </BusList.Provider> */}
      <ToastContainer position="top-center"/>

    </>

  );
}

export default App;
