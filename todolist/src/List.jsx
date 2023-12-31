import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


//cross pe click kro or del ho jae item
//onclick ko click yaha kru but main App.jsx me jake apna functn perform kre....or mujhe ek id chahia taki pata chale ki kis id ko click kia or kisko del kre
const List = (props) => {
    
  return (
    <>
    <div className="todo-style">
    <button onClick={()=>{
        props.onSelect(props.id);
    }}><DeleteIcon/></button>
    <li>{props.type}</li>
    </div>
    </>
    
  )
}

export default List;
