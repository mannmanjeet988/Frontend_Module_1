import React, {useState} from 'react'
import "../style.css"

//let a = 10 
console.log("I am outside the component")


const States1 = () => {

   let a=1;
    const[count, setCount]= useState(0);
    function increase1(){
        a= a+1;
        console.log("value of a:",a);
       
    }

    function increase2(){
        setCount(count+1);
        console.log("value of count:",count);

    }

  return (
    <div className="states1">
        <div>
           <h1>Value:{a}</h1>
           <button onClick={increase1}>Increase1</button>
        </div>
        <div>
        <h1>Value:{count}</h1>
           <button  onClick={increase2}>Increase2</button>
        </div>
    </div>
  )
}

export default States1