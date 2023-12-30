import React, { useState } from "react";
const Form=()=>{
    const [val,setval]=useState("");
    const [fullval,setfullval]  = useState("");
    
    const inputEvent=(e)=>{
        // console.log(e.target.value);
        setval(e.target.value);
    }

    const showval=(e)=>{
        e.preventDefault();
        setfullval(val);
};

// form tag use krne se dafault behav se data backend me jata hai isilia onSubmit event ko use krenge form tag me or ,,or onClick event ko discsrd krenge

//reload ko hatne ke lia,u knoe event call krte ahi to object pass krta  hai usko access kr skte hai as (e).preventDefault();
return(
    <>
    <div>
    <form onSubmit={showval}>
    <h2>hello {fullval}</h2>
        <input type="text" placeholder="enter name" onChange={inputEvent}  value={val}/>
        <button type="submit">click me 😄</button>
    </form>

    </div>
        
    </>
);
};
export default Form;
