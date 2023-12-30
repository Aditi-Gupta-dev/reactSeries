import Form2 from './Form2';
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

    const purple="pink";
    const [bg,setbg]=useState(purple); 
    const [name,setName]=useState('click me');

    
    const bgchange=()=>{
        // console.log("click");
        let color="yellow";
        setbg(color);
        setName("are!!");
    };
    const bgback=()=>{
        setbg(purple);
        setName("bye!!");
    };


    return (
        <>
            <div className="container">

            <h2>{count}</h2>
                <button onClick={incNum}>update</button>
                <p>tap this button to increase the no by 1</p>
                <h1>{ctime}</h1>

                <div style={{background:bg}} className="div2">
                <button onMouseEnter={bgchange} onMouseLeave={bgback}>{name}</button>
            </div>
                
            <div className="form">
            <Form2/>

            </div>
                
                
            </div>
        </>
    );

};
export default App;


// import React from "react";
// import Form from './Form';
// const App=()=>{
    
//     return (
//         <>
//         </>
//     );
// }
// export default App;
