import InformationMolekul from "../molekul/InformationMolekul";
import Input from "../molekul/InputMolekul";

import React from 'react'

function BottomOrganizma({todos}) {
  return (
    <div>
      <InformationMolekul todos={todos}/>
      <Input/>
    </div>
  )
}

export default BottomOrganizma