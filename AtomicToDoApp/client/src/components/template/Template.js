import BottomOrganizma from "../organizma/BottomOrganizma";
import TopOrgonizma from "../organizma/TopOrgonizma";
import React from 'react'

function Template({todos}) {
  return (
    <div>
      <TopOrgonizma/>,
      <BottomOrganizma todos={todos}/>
    </div>
  )
}

export default Template