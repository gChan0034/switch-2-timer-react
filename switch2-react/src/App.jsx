import {useState, useEffect} from 'react'
import './App.css'

function App() {

  const end = new Date("06/05/2025 12:00:01 AM")

  const [now, setNow] = useState(new Date())

  useEffect(()=>{
    function timer(){
      setNow(new Date())
    }
    const id = setInterval(timer, second)
    return function(){
      console.log("Test")
      clearInterval(id)}
  },[])

  const distance = Math.abs(end - now)
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  function getRemainingDays(){
    const remainingDays = Math.floor(distance/day)
  return remainingDays
  }

  function getRemainingHours(){
    const remainingHours = Math.floor((distance%day)/hour)
  return remainingHours
  }

  function getRemainingMinutes(){
    const remainingMinutes = Math.floor((distance%hour)/minute)
  return remainingMinutes
  }

  function getRemainingSeconds(){
    const remainingSeconds = Math.floor((distance%minute)/second)
  return remainingSeconds
  }
  if(distance>=0){
    return (
      <>
        <div>
          {`Remaining time until Switch 2 release:`}
          <br />
          {`${getRemainingDays()} days, ${getRemainingHours()} hours, ${getRemainingMinutes()} minutes, ${getRemainingSeconds()} seconds`}
        </div>
      </>
    )
  }
  else{     
    return (
      <>
        <div>
          {`The switch 2 has been released for`}
          <br />
          {`${getRemainingDays()} days, ${getRemainingHours()} hours, ${getRemainingMinutes()} minutes, ${getRemainingSeconds()} seconds`}
        </div>
      </>
    )
  }
}

export default App