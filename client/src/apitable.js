import React from 'react'

function apitable (props){
    return(
      
        <tr  style={{height:"50px"}} >
            
           <td style={{width:'10%', textAlign:'justify' }}> <b>Name:</b> &nbsp; &nbsp; {props.name}</td> 
           <td style={{width:'7%', textAlign:'justify' }}> <b>Height:</b> &nbsp; &nbsp; {props.height}</td> 
           <td style={{width:'7%', textAlign:'justify' }}> <b>Mass:</b>  &nbsp; &nbsp; {props.mass}</td> 
           <td style={{width:'10%', textAlign:'justify' }}> <b>Hair Color:</b>  &nbsp; &nbsp; {props.hair_color}</td>
           <td style={{width:'10%', textAlign:'justify' }}> <b>Skin Color:</b> &nbsp; &nbsp; {props.skin_color}</td>  
           <td style={{width:'10%', textAlign:'justify' }}> <button onClick={props.deleteEvent}>Delete</button></td> 
        
        </tr>

              
    )
}

export default apitable;