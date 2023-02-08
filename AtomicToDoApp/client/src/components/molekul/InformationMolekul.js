import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function InformationMolekul({todos}) {
  const onCliclButton= (id)=>{
    axios.delete("http://localhost:3000/delModel/"+id)



  }
  

  return (

    <div>

        <ul>
         
         {
          todos?.map((x,i)=>(
            

              <div key={i} style={{}}>
                  <li style={{"width":"25%","listStyle":"none","display":"inline-block"}}>{x.baslik}</li>
                  <li style={{"width":"25%","listStyle":"none","display":"inline-block"}}>{x.description}</li>
                  <li style={{"width":"25%","listStyle":"none","display":"inline-block"}}>{x.created}</li>
                  
                  <button onClick={()=>onCliclButton(x._id)} style={{"width":"25%"}}>bitti</button>
              </div>
             
             
      
          ))
         }

          

        </ul>

    </div>
  )
}

export default InformationMolekul