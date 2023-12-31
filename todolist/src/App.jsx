import React, { useCallback, useState } from 'react'
import List from './List';

const App = () => {
    const [inputList,setInputList]=useState("");

    const [Item,setItem]=useState([]);
    // Sare items ko array me store kr lo jo apna state badal raha hai and then us array ke elements ko side by side list me dalo stah sath display bhi ho jae...with the help of map
    //user jab bhi button ko click kre to usesate ka value change ho or array me data add hojae

    const inputEvent=(e)=>{
        setInputList(e.target.value);

    };

    const addtoarray=()=>{
        setItem((olditem)=>{
            return [...olditem,inputList];
        })
        setInputList("");
    }
// yaha par trigger ho raha del wala onClick
    const deleteitem=(id)=>{
        console.log("Dele");
        setItem((olditem)=>{
            return olditem.filter((arrele,index)=>{
                return index!==id;
            });
        });
    };
  return (
    <>
     <div className='main-div'>
     <div className='center-div'>
        <br/>
        <h1>to do list app</h1>
        <br/>
        <input type='text' placeholder='ex. buy vegetables' onChange={inputEvent} value={inputList}/>
        {/* value add krna imp hai nahi to input fild empty nahi hoga 😫*/}
        <button onClick={addtoarray} > + </button>

        <ol>
            {/* <li>{inputList}</li> */}
            {/* ab smjho ki map me ek function banao usko itemvalue pass kro or return kro li */}

            {/*=== yaha par onSelect se item ko select kro jab select krogi to onclick trigger hoga uske baad deleteitem ===*/}

            {Item.map((itemvalue,index)=>{
                return(
                    <>
                    <List 
                    key={index} 
                    type={itemvalue}
                    id={index}
                    onSelect={deleteitem}
                    />
                    </>
                );
            })
            }

        </ol>

    
     </div>
      
     </div>
    </>
    
  )
};

export default App;
