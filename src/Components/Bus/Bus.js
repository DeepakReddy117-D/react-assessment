// import ContextApi from "./ContextApi";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useInput from "../Home/useInput";

import './Bus.css'
import { useContext } from "react";
import BusContext from "./BusContext";
import img from "../Bus/BusImg/med.svg";
import img1 from "../Bus/BusImg/help.svg";
import img2 from "../Bus/BusImg/loyalty.svg";
import train from "../Bus/BusImg/train.svg";

import img3 from "../Bus/BusImg/percent.svg";
import img4 from "../Bus/BusImg/whatsapp.svg";
import img5 from "../Bus/BusImg/masks.svg";
import img6 from "../Bus/BusImg/sanitizer.svg";
import rate from "../Bus/BusImg/rating.svg";
import { useState } from "react";

function Bus() {

  // Bus Booking Search Component 

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleFrom = ((e) => {
    setFrom(e.target.value);
  })
  const handledate = ((e) => {
    setDate(e.target.value);
  })
  const handleTo = (e) => {
    setTo(e.target.value)
  }
  const value = useContext(BusContext);

  const [data, setData] = useState([])
  const handleSearch = (e) => {
    e.preventDefault()
    

      toast.success(" Please Wait ....! ");

    setTimeout(()=>{
      const matchPickup = value?.filter(add => {
        return add.pickup_address.toLowerCase() === from.toLowerCase()
      })
  
      const matchDrop = matchPickup?.filter(add => {
        return add.drop_address.toLowerCase() === to.toLowerCase()
      })
      
      setData(matchDrop);

    },5000)


  }

  const { value: name,
    isValid: nameIsValid,
    hasEror: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName }
    = useInput(value => value.trim() !== "");


  // Gmail  
  const { value: gmail,
    isValid: gmailIsValid,
    hasEror: gmailHasError,
    valueChangeHandler: gmailChangeHandler,
    inputBlurHandler: gmailBlurHandler,
    reset: resetGmail }
    = useInput(value => value.trim() !== "");

  //  Form Submition Handling

  let formIsValid = false;

  if (nameIsValid && gmailIsValid) {
    formIsValid = true;
  }

  // Username Error Msg Styles 
  const usernameInputClasses = nameHasError ? "form-controle-invalid" : "form-controle";

  // Gmail Error Msg Styles
  const gmailInputClasses = gmailHasError ? "form-controle-invalid" : "form-controle";






  // Form Booking 
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUSer] = useState([])
  const handleGender = ((e) => {
    setGender(e.target.value);
  })
  const handleMobile = ((e) => {
    setMobile(e.target.value);
  })
  const handlAge = ((e) => {
    setAge(e.target.value);
  })


  const BookTicket = (e) => {
    e.preventDefault();
    if (!nameIsValid && !gmailIsValid) {
      return;
    }
      toast.success(" Your Ticket is Booked ");
      setTimeout(()=>{
        
    const newUser = { BookedData: name, gmail, gender, age, mobile,date }
    setUSer(preUser => {
      return [...preUser, newUser]
    })
    localStorage.setItem("Booked Data ", JSON.stringify([...user, newUser]));
 

      },5000)
       }


  return (
    <>

    <div className="formbg2">
          <div className="formbox">

    
      <form  >
        <select className="mx-3 p-2 text-dark " value={from} onChange={handleFrom}>
          <option>Durgapur</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Goa</option>
          <option>Hyderabad</option>

        </select>

        <select className="mx-3 p-2 text-dark " value={to} onChange={handleTo}>
          <option>Howrah</option>
          <option>New Delhi </option>
          <option>Rajasthan </option>
          <option>Kerala </option>
          <option>Bhopal </option>

        </select>
        <label className="mx-2 text-white " htmlFor="date"> Date  </label>
        <input type="date" name="date" className="text-white " value={date} onChange={handledate}/>
      
        <button onClick={handleSearch} className="btn-success searchbtn" type="submit">
          Seach
        </button>
      </form>
      </div>
      
    </div>

      {data?.map((data) => {
        return (
          <div className="container-fluid busList m-3">
            <table className="table table-borderless table-responsive ">
              <thead className="thead-light table-secondary">
                <tr>
                  <th scope="col">{(data.travel_name)}</th>
                  <th scope="col">Pick Up </th>
                  <th scope="col">Duration </th>
                  <th scope="col">Drop At </th>
                  <th scope="col">Rating </th>
                  <th scope="col"> {(data.price)}<svg xmlns="http://www.w3.org/2000/svg" className="Rupee mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg></th>
                </tr>
              </thead>

              <tbody className="table-borderless">
                <tr>
                  <td scope="col">{(data.bus_name)}</td>
                  <td scope="col">{(data.pickup_address)}</td>
                  <td scope="col">{(data.duration)}</td>
                  <td scope="col">{(data.drop_address)}</td>
                  <td scope="col">{(data.rating)} <img src={rate} alt="rating icon " classsName="m-0" /></td>
                  <td scope="col">
              <img src={train} className="train" alt="Train" /></td>
                </tr>
                <tr>
                  <td scope="col">{(data.seat_type)}</td>
                  <td scope="col">{(data.pick_up_time)} Hr </td>
                  <td scope="col"></td>
                  <td scope="col">{(data.drop_time)} Hr </td>
                  <td scope="col"></td>
                  <td scope="col">{(data.seats_available)}</td>
                </tr>
              </tbody>

              <img src={img} className="mx-2" alt="Med kit image " />
              <img src={img1} className="mx-2" alt="Med kit image " />
              <img src={img2} className="mx-2" alt="Med kit image " />
              <img src={img3} className="mx-2" alt="Med kit image " />
              <img src={img4} className="mx-2" alt="Med kit image " />
              <img src={img5} className="mx-2" alt="Med kit image " />
              <img src={img6} className="mx-2" alt="Med kit image " />

              <div className=" bookbtn rounded-pil"> <button className="btn-success mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal"> Book  </button> </div>
            </table>
          </div>
        );
      })}


      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Please Enter Your details.</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className=" formdiv row justify-content-center">

                <form className=" tex-center " >
                  <div className=" ">
                    <p className="title mb-4">
                      Please enter your Details.!
                    </p>

                    {/* no of seats  */}
                    <div >
                      <label htmlFor="quantity" className="text-left">Select No of Seats : </label>
                      <input  type="number" id="quantity" name="quantity" min="1" max="10" className="text-center mx-3" />
                    </div> 

                    {/* Name  */}
                    <div className={usernameInputClasses}>
                      <label htmlFor="name" className=" text-dark "> Name : </label>
                      <input type="text"
                        id="name"
                        className=""
                        value={name}
                        onBlur={nameBlurHandler}
                        onChange={nameChangeHandler} />
                      {nameHasError && <p className="error-text">Name must not be Empty . </p>} </div>

                    {/* Gmail  */}
                    <div className={gmailInputClasses}>
                      <label htmlFor="gmail" className=" text-dark" > Gmail : </label>
                      <input type="text"
                        id="gmail"
                        className=""
                        value={gmail}
                        onBlur={gmailBlurHandler}
                        onChange={gmailChangeHandler} />
                      {gmailHasError && <p className="error-text">Gmail   must not be Empty . </p>}
                    </div>

                    {/* Mobile Number  */}
                    <div>
                      <label htmlFor="number">Mobile :  </label>
                      <input type="text" id="number" name="number" value={mobile} onChange={handleMobile} />
                    </div>

                    {/* Age  */}
                    <div>
                      <label htmlFor="age">Age </label>
                      <input type="number" id="age" name="age" value={age} onChange={handlAge} />
                    </div>


                    {/* Gender  */}
                    <div className="mt-3">
                      <select value={gender} onChange={handleGender}>
                        <option>Male</option>
                        <option>Female </option>
                      </select>
                    </div>


                  </div>
                  <div>
                  </div>
                </form>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary mt-3  pt-1 pb-1 " data-bs-dismiss="modal">
                Cancel
              </button>
              <button disabled={!formIsValid} type="button" className="btn btn-success mt-3  pt-1 pb-1 " onClick={BookTicket}>
                Book Your Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center"/>
    </>
  );
}
export default Bus;
