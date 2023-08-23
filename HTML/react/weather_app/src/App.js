import React,{useState} from "react"

import './style.css';

function App() {

     const [lat, setLat] = useState("");
      const [long, setLong] = useState("");
      const [hemisphere , setHemisphere] = useState(null);
      //  const [month,setMonth] = useState("");



      function findLocation(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
                   console.log(position.coords.latitude);
                   setLat(position.coords.latitude);
                   setLong(position.coords.longitude);
                   updateHemisphere(position.coords.latitude)
          })
        }
      }

      function updateHemisphere(lat){
        if(lat < 0){
            setHemisphere("Southern Hemisphere")
        } else if (lat > 0){
          setHemisphere("Northern Hemisphere")
        } else {
          setHemisphere("Equator")
        }
      }
 
      function updateSeason(){
        const date = new Date;
        console.log(date);
        const currMonth=date.getMonth();    // 0 to 11
        console.log(currMonth)
        // setMonth(currMonth);
        if((hemisphere==="Northern Hemisphere" && (currMonth >=2 && currMonth <=8)) || //March to september
          (hemisphere==="Southern Hemisphere" && (currMonth ===0 || currMonth ===1 || currMonth ===9 || currMonth ===10 || currMonth ===11 ))){  
            // let a=document.getElementsByClassName("season-span")[0].innerHTML="summer Season";
            document.getElementsByClassName("season-span")[0].innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFxaoDc-T1thHmcx7FsHc9cXVncE64NyXjg&usqp=CAU"> `;
            //console.log("Summer season",a);
        }   
        else if((hemisphere==="Southern Hemisphere" && (currMonth >=2 && currMonth <=8)) ||
        (hemisphere==="Northern Hemisphere" && (currMonth ===0 || currMonth ===1 || currMonth ===9 || currMonth ===10 || currMonth ===11 ))){
          console.log("Winter season")
          document.getElementsByClassName("season-span")[0].innerHTML=`<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6azF9kM9KKt7jgWwkd76zm8w-MFcHvytHg&usqp=CAU" />`
        }
      }
      
  return (
    <div className="App">
       {
       findLocation()
       }
        {/* <button onClick={findLocation}>Find My Location</button> */}
       <h1>Latitude: <span className="updatedValue" >{lat}</span></h1>
       <h1>Longitude: <span className="updatedValue" >{long}</span></h1>
       <h1>Hemisphere: <span className="updatedValue" >{hemisphere}</span></h1>   
       <h1><span className=" season-span updatedValue"></span></h1>   
       {/* <h1>Season: <span className="updatedValue" >Winter</span></h1>   */}
       {
        (hemisphere!==null) && updateSeason()
       }
    </div>
  );
}

export default App;
