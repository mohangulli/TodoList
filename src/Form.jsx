import { useState } from "react";

export default function counter()
{
let[count,setcount]=useState(0);
console.log("re rendering")
console.log( ` re rending${count}`);
    function inCount(){
setcount(count+1);
//console.log(c);
console.log("before rendering")
console.log(`before rendering ${count}`);
    }
        
    return(
<div>
        <h3 >count={count}</h3>
        <button onClick={inCount}>incrse count</button>
        </div>
   );
}