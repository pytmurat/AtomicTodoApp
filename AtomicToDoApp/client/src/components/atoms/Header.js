import React from 'react'

function Header({deger,color,padding,back}) {
  return (
      <div style={{}}>
         <h3 style={{background:back,color:color,marginBottom:padding}}>{deger}</h3>
      </div>
     
   
  )
}

export default Header