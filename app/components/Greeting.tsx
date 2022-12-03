'use client';

import { DateTime } from 'luxon'
import { useState, useEffect } from 'react';

export default function Greeting() {
  const [greetingState, setGreeting] = useState('\u00A0');

  function getTimer(){
    let time = DateTime.now().toFormat("H")
    let timeInt = parseInt(time)
    let greeting = ''
    if(timeInt >= 5 && timeInt < 12) {
    greeting = "Good morning!"
    } else if (timeInt >= 12 && timeInt < 17) {
    greeting = "Good Afternoon!"
    } else {
        greeting = "Good Evening!"
    }
    return greeting
  }
  
  function setTimer(){
    setGreeting(getTimer())
  }

  useEffect(() => {
      setGreeting(getTimer())
      const timer = setInterval(setTimer, 300000)
      return () => {
          clearInterval(timer)
      }
  }, [])


  return (
    <span>{greetingState}</span>
  );
}