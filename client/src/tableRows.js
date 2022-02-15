import React from 'react'

function rowCol (props){
    return(
      <>
        <tr  style={{height:"50px", }} >
            
           <td style={{width:'20%', }}><b>Name:</b>&nbsp; &nbsp; {props.name}</td> <br />
           <td style={{width:'20%', }}><b> Agent:</b> &nbsp; &nbsp;{props.agent}</td> 
           <td style={{width:'20%', }}><b> Location:</b>&nbsp; &nbsp; {props.location}</td> 
           <td style={{width:'20%', }}><b> Salary:</b>&nbsp; &nbsp; {props.salary}</td>  
           <td style={{width:'20%', }}> <button onClick={props.deleteEvent}>Delete</button></td> 
        
        </tr>


       </>        
    )
}

export default rowCol;