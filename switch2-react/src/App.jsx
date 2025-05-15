import { useEffect} from 'react'
import './App.css'

function App() {

  const end = new Date("06/05/2025 12:00:01 AM")
  const now = new Date()

  useEffect(()=>{
    console.log("Testing")
  },[now])

  const distance = end - now

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
          {`Remaining time until Switch 2 release: ${getRemainingDays()} days, ${getRemainingHours()} hours, ${getRemainingMinutes()} minutes, ${getRemainingSeconds()} seconds`}
        </div>
      </>
    )
  }
  else{     
    return (
      <>
        <div>
          {`The switch 2 has been released for ${-1* getRemainingDays()} days, ${-1* getRemainingHours()} hours, ${-1* getRemainingMinutes()} minutes, ${-1* getRemainingSeconds()} seconds`}
        </div>
      </>
    )
  }
}

export default App
