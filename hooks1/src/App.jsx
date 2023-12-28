import React, { useState } from "react";

const App=()=>{
const state = useState();
console.log(state);
const [count,setCount]=useState(0);

const incNum=()=>{
    setCount(count + 1);
    // console.log("clicked"+ count++);
}
return(
<>
<div className="container">
<h1>{count}</h1>
    <button onClick={incNum}>add one</button>
</div>    
</>
);
};
export default App;
