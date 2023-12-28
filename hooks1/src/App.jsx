import React, { useState } from "react";

const App=()=>{
let time=new Date().toLocaleTimeString();
const [ctime,setctime]=useState(time);
const changetime=()=>{
    let newtime=new Date().toLocaleTimeString();
    setctime(newtime);

};
return(
<>
<div className="container">
<h1>{ctime}</h1>
    <button onClick={changetime}>view time</button>
</div>    
</>
);
};
export default App;
