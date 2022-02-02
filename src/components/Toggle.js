import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handleClick(){
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white"

  !isOn ? console.log("Turned me Off") : console.log("Turned me On")
  
  return <button style={{ background: color }} onClick={handleClick}>{!isOn ? "Off" : "On"}</button>;
  
  

}

export default Toggle;
