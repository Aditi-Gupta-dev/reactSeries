import React, { useState } from "react";
// forms me <input> ke ander name attri ka hona must hai...is name ko setdata se match krwate hai

const Form2=()=>{

    // ab yaha smjho ki multiple inputs ke lia use state me obj pass krenge having those inputs
    const [fullname,setfullname]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });

    const inputEvent=(e)=>{

        // console.log(e.target.value);
        // console.log(e.target.name);

        // console.log(e.target.placeholder);


        // const value=e.target.value;
        // const name=e.target.name;

        //array destructuring
        const {value,name}=e.target;

        setfullname((preValue)=>{

            return{
                ...preValue,
                [name]:value,
            };
            // if(name==="fName"){
            //     return {
            //     fname:value,
            //     email:preValue.email,
            //     phone:preValue.phone,
            //     lname:preValue.lname,
            //     };

            // };
            // if(name==="lName"){
            //     return {
            //         email:preValue.email,
            //         phone:preValue.phone,
            //         lname:value,
            //         fname:preValue.fname,
            //         };
            // }
            // if(name==="mail"){
            //     return {
            //         email:value,
            //         phone:preValue.phone,
            //         lname:preValue.lname,
            //         fname:preValue.fname,
            //         };
            // }
            // if(name==="phone"){
            //     return {
            //         email:preValue.email,
            //         phone:value,
            //         lname:preValue.lname,
            //         fname:preValue.fname,
            //         };
            // }
            
        });



    };
    const showval=(e)=>{
        e.preventDefault();
        alert("form submitted");

    };


    return (
        <>
         <div>
    <form onSubmit={showval}>
    <h2>hello {fullname.fname} {fullname.lname}</h2>
    <p>{fullname.email}</p>
    <p>{fullname.phone}</p>
        <input type="text" placeholder="enter first name" name="fname" onChange={inputEvent}  value={fullname.fname}/>
        <br/>
        <input type="text" placeholder="enter last name" name="lname" onChange={inputEvent}  value={fullname.lname}/>
        <br/>
        <input type="email" placeholder="enter email" name="email" onChange={inputEvent}  value={fullname.email} required/>
        <br/>
        <input type="number" placeholder="number dalo" name="phone" onChange={inputEvent}  value={fullname.phone}/>

        <button type="submit">submit here</button>
    </form>

    </div>


        </>
    );
};

export default Form2;

