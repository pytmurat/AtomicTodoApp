import React from 'react'
import {useState}  from 'react'
import axios from "axios"

function Input() {
  const[veri,setVeri]=useState({"baslik":"","description":""})
  
  const onChangeInput = (e)=>{
    setVeri({...veri,[e.target.name]:e.target.value})
  }
  const onClicButton = ()=>{
    axios.post("http://localhost:3000/postModel",veri)
    console.log("on click çalıştı")
  }
  
  return (

   
      <div style={{"width":"100%","marginRight":"auto","marginLeft":"auto"}}>

        <input name="baslik"  value={veri.baslik} onChange={onChangeInput} style={{"marginTop":"2px","marginBottom":"2px","border":"solid black 2px","textAlign":"center","display":"block","width":"100%","padding":"5px"}} placeholder='baslık'></input>
        <input name="description" value={veri.description} onChange={onChangeInput} style={{"marginBottom":"2px","border":"solid black 2px","textAlign":"center","display":"block","width":"100%","padding":"5px"}} placeholder='Gorev Ekle'></ input>
        
        <button onClick={onClicButton} style={{"background":"green","textAlign":"center","display":"block","width":"100%","border":"solid black 2px","padding":"5px"}} >Ekle</button>
      </div>
    
  )
}

export default Input