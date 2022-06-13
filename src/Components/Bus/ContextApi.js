import BusContext from "./BusContext";
import React from "react"
const AllBusList  = [

    // 1
    //A)   Durgapur - All Ac's   

    {
    "bus_name": "Bharat Benz",
    "pick_up_time": "06 : 00 ",
    "duration": "20 : 30 ",
    "drop_time": "02 : 30 ",
    "rating": 3.9,
    "price": 1325,
    "seats_available": 34,
    "seat_type": " A/C Sleeper(2 + 1)",
    "pickup_address": "durgapur",
    "drop_address": "howrah",
    "travel_name": "JGD Travels Pvt Ltd.",
},
{
    
    "bus_name": "Tata Motars ",
    "pick_up_time": "09 : 00",
    "duration": "12",
    "drop_time": "21 : 00 ",
    "rating": 4.2,
    "price": 1225,
    "seats_available": 34,
    "seat_type": " A/C Sleeper(2 + 1)",
    "pickup_address": "durgapur",
    "drop_address": "new delhi ",
    "travel_name": " Orange Travels.",
},
{
    
   
    "bus_name": "Ashoka Leylans",
    "pick_up_time": "12 : 00",
    "duration": "6",
    "drop_time": "18 : 00",
    "rating": 4.6,
    "price": 1225,
    "seats_available": 34,
    "seat_type": " A/C Sleeper(2 + 1)",
    "pickup_address": "durgapur",
    "drop_address": "rajasthan",
    "travel_name": "Hans Travels (I) Pvt Ltd.",
 
},
{
    
   
    "bus_name": "Volvo ",
    "pick_up_time": "17 : 00",
    "duration": "16",
    "drop_time": "09 : 30",
    "rating": 3.9,
    "price": 1425,
    "seats_available": 34,
    "seat_type": " A/C Sleeper(2 + 1)",
    "pickup_address": "durgapur",
    "drop_address": "kerala",
    "travel_name": " Primo National travels.",
},
{
    "bus_name": "S M L Isuzi",
    "pick_up_time": "22 : 00",
    "duration": "10",
    "drop_time": "08 : 30",
    "rating": 4.9,
    "price": 1125,
    "seats_available": 34,
    "seat_type": " A/C Sleeper(2 + 1)",
    "pickup_address": "durgapur",
    "drop_address": "bhopal",
    "travel_name": " Fexi Ticket National travels",
},

//  B) Durgapur to All Non -Ac's
    
{
    "bus_name": "Bharat Benz",
    "pick_up_time": "12 : 00 ",
    "duration": "6 ",
    "drop_time": "18 : 30 ",
    "rating": 3.9,
    "price": 1325,
    "seats_available": 34,
    "seat_type": " Non- A/C Seater",
    "pickup_address": "durgapur",
    "drop_address": "howrah",
    "travel_name": "JGD Travels Pvt Ltd.",
},
{
    
    "bus_name": "Tata Motars ",
    "pick_up_time": "15 : 00",
    "duration": "9",
    "drop_time": "21 : 00 ",
    "rating": 4.2,
    "price": 1225,
    "seats_available": 34,
    "seat_type": " Non- A/C Seater",
    "pickup_address": "durgapur",
    "drop_address": "new delhi ",
    "travel_name": " Orange Travels.",
},
{
    
   
    "bus_name": "Ashoka Leylans",
    "pick_up_time": "18 : 00",
    "duration": "6",
    "drop_time": "24 : 00",
    "rating": 4.6,
    "price": 1225,
    "seats_available": 34,
    "seat_type": "  Non- A/C Seater",
    "pickup_address": "durgapur",
    "drop_address": "rajasthan",
    "travel_name": "Hans Travels (I) Pvt Ltd.",
 
},
{
    
   
    "bus_name": "Volvo ",
    "pick_up_time": "23 : 00",
    "duration": "11 : 30 ",
    "drop_time": "10 : 30",
    "rating": 3.9,
    "price": 1425,
    "seats_available": 34,
    "seat_type": "  Non- A/C Seater",
    "pickup_address": "durgapur",
    "drop_address": "kerala",
    "travel_name": " Primo National travels.",
},
{
    "bus_name": "S M L Isuzi",
    "pick_up_time": "05 : 00",
    "duration": "5 : 30",
    "drop_time": "10 : 30",
    "rating": 4.9,
    "price": 1125,
    "seats_available": 34,
    "seat_type": " Non- A/C Seater",
    "pickup_address": "durgapur",
    "drop_address": "bhopal",
    "travel_name": " Fexi Ticket National travels",
},

// 2
    //A)   mumbai - All Ac's   

    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "06 : 00 ",
        "duration": "20 : 30 ",
        "drop_time": "02 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "mumbai",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "09 : 00",
        "duration": "12",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "mumbai",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "12 : 00",
        "duration": "6",
        "drop_time": "18 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "mumbai",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "17 : 00",
        "duration": "16",
        "drop_time": "09 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "mumbai",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "22 : 00",
        "duration": "10",
        "drop_time": "08 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "mumbai",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    
    //  B) mumbai to All Non -Ac's
        
    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "12 : 00 ",
        "duration": "6 ",
        "drop_time": "18 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "mumbai",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "15 : 00",
        "duration": "9",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "mumbai",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "18 : 00",
        "duration": "6",
        "drop_time": "24 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "mumbai",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "23 : 00",
        "duration": "11 : 30 ",
        "drop_time": "10 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "mumbai",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "05 : 00",
        "duration": "5 : 30",
        "drop_time": "10 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "mumbai",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    



// 3
    //A)   mumbai - All Ac's   

    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "06 : 00 ",
        "duration": "20 : 30 ",
        "drop_time": "02 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "bangalore",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "09 : 00",
        "duration": "12",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "bangalore",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "12 : 00",
        "duration": "6",
        "drop_time": "18 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "bangalore",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "17 : 00",
        "duration": "16",
        "drop_time": "09 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "bangalore",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "22 : 00",
        "duration": "10",
        "drop_time": "08 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "bangalore",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    
    //  B) bangalore to All Non -Ac's
        
    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "12 : 00 ",
        "duration": "6 ",
        "drop_time": "18 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "bangalore",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "15 : 00",
        "duration": "9",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "bangalore",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "18 : 00",
        "duration": "6",
        "drop_time": "24 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "bangalore",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "23 : 00",
        "duration": "11 : 30 ",
        "drop_time": "10 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "bangalore",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "05 : 00",
        "duration": "5 : 30",
        "drop_time": "10 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "bangalore",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    



// 4
        
    //A)   mumbai - All Ac's   

    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "06 : 00 ",
        "duration": "20 : 30 ",
        "drop_time": "02 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "hyderabad",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "09 : 00",
        "duration": "12",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "hyderabad",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "12 : 00",
        "duration": "6",
        "drop_time": "18 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "hyderabad",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "17 : 00",
        "duration": "16",
        "drop_time": "09 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "hyderabad",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "22 : 00",
        "duration": "10",
        "drop_time": "08 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "hyderabad",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    
    //  B) hyderabad to All Non -Ac's
        
    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "12 : 00 ",
        "duration": "6 ",
        "drop_time": "18 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "hyderabad",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "15 : 00",
        "duration": "9",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "hyderabad",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "18 : 00",
        "duration": "6",
        "drop_time": "24 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "hyderabad",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "23 : 00",
        "duration": "11 : 30 ",
        "drop_time": "10 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "hyderabad",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "05 : 00",
        "duration": "5 : 30",
        "drop_time": "10 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "hyderabad",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    



// 5 

    //A)   mumbai - All Ac's   

    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "06 : 00 ",
        "duration": "20 : 30 ",
        "drop_time": "02 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "goa",
        "drop_address": "howrah",
        "travel_name": "Orange Travels.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "09 : 00",
        "duration": "12",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "goa",
        "drop_address": "new delhi ",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "12 : 00",
        "duration": "6",
        "drop_time": "18 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "goa",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "17 : 00",
        "duration": "16",
        "drop_time": "09 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "goa",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "22 : 00",
        "duration": "10",
        "drop_time": "08 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " A/C Sleeper(2 + 1)",
        "pickup_address": "goa",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    
    //  B) goa to All Non -Ac's
        
    {
        "bus_name": "Bharat Benz",
        "pick_up_time": "12 : 00 ",
        "duration": "6 ",
        "drop_time": "18 : 30 ",
        "rating": 3.9,
        "price": 1325,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "goa",
        "drop_address": "howrah",
        "travel_name": "JGD Travels Pvt Ltd.",
    },
    {
        
        "bus_name": "Tata Motars ",
        "pick_up_time": "15 : 00",
        "duration": "9",
        "drop_time": "21 : 00 ",
        "rating": 4.2,
        "price": 1225,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "goa",
        "drop_address": "new delhi ",
        "travel_name": "Orange Travels.",
    },
    {
        
       
        "bus_name": "Ashoka Leylans",
        "pick_up_time": "18 : 00",
        "duration": "6",
        "drop_time": "24 : 00",
        "rating": 4.6,
        "price": 1225,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "goa",
        "drop_address": "rajasthan",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
     
    },
    {
        
       
        "bus_name": "Volvo ",
        "pick_up_time": "23 : 00",
        "duration": "11 : 30 ",
        "drop_time": "10 : 30",
        "rating": 3.9,
        "price": 1425,
        "seats_available": 34,
        "seat_type": "  Non- A/C Seater",
        "pickup_address": "goa",
        "drop_address": "kerala",
        "travel_name": " Primo National travels.",
    },
    {
        "bus_name": "S M L Isuzi",
        "pick_up_time": "05 : 00",
        "duration": "5 : 30",
        "drop_time": "10 : 30",
        "rating": 4.9,
        "price": 1125,
        "seats_available": 34,
        "seat_type": " Non- A/C Seater",
        "pickup_address": "goa",
        "drop_address": "bhopal",
        "travel_name": " Fexi Ticket National travels",
    },
    

]









// const BusList = createContext(

// );


{/* <BusList ></BusList> */}



// export {BusList} ;




function ContextApi(props){

    return(
        <>
        <BusContext.Provider value={AllBusList}  >
            {props.children}
        </BusContext.Provider>

        </>
    );
}
export default ContextApi;