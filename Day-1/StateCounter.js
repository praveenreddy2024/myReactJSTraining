import { useState } from "react";

function StateCounter() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("Praveen");

    function incrementCounter() {
        let value = 'a';
        setCount(count + 1);
     setName()
         console.log(count);
         console.log(name);
     }
  
       
   return (
     <div>
        
       <h1>{count}</h1>
         <h1>{name}</h1>
         <button onClick={incrementCounter}>Increment</button>
        
        </div>
   );
 }
  
 export default StateCounter;