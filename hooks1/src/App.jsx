import React, { useState } from "react";


// ============DIGITAL CLOCK=========
const App=()=>{
    let [count,setcount]=useState(0);

    const incNum=()=>{
        setcount(count+1);
    }
    let time=new Date().toLocaleTimeString();
    let [ctime,setctime]=useState(time);
    const update=()=>{
        time=new Date().toLocaleTimeString();
        setctime(time);
    }
    setInterval(update,1000);

    return (
        <>
            <div className="container">

            <h2>{count}</h2>
                <button onClick={incNum}>update</button>
                <p>tap this button to increase the no by 1</p>
                <h1>{ctime}</h1>
                
                
                
            </div>
        </>
    );

};
export default App;
