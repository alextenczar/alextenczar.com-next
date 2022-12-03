'use client';

import { DateTime, Settings } from 'luxon'
import { useState, useEffect } from 'react';

export default function CurrentTime() {
  
  const zone = 'America/New_York'
  const [date, setDate] = useState({display: '\u00A0', dt: '\u00A0'});
  const [time, setTime] = useState({display:'\u00A0', dt: '\u00A0'});
  const [meridiem, setMeridiem] = useState('\u00A0');

  function getTimer(portion: string){
    if(portion === "date-display") {
      return DateTime.now().setZone(zone).setLocale('en-US').toFormat("LLL', 'd") + ' at'
    } else if(portion === "date-dt") {
      return DateTime.now().setZone(zone).setLocale('en-US').toFormat("MM'-'dd")
    } else if(portion === "time-display") {
      return DateTime.now().setZone(zone).setLocale('en-US').toFormat("hh':'mm':'ss")
    } else if(portion === "time-dt") {
      return DateTime.now().setZone(zone).setLocale('en-US').toFormat("HH':'mm':'ss")
    } else if(portion === "meridiem") {
      return DateTime.now().setZone(zone).setLocale('en-US').toFormat('a')
    } else {
      return ''
    }
  }
  
  function setTimer(){
    setDate({ display: getTimer('date-display'), dt: getTimer('date-dt')})
    setTime({ display: getTimer('time-display'), dt: getTimer('time-dt')})
    setMeridiem(getTimer('meridiem'))
  }

  useEffect(() => {
      setDate({ display: getTimer('date-display'), dt: getTimer('date-dt')})
      setTime({ display: getTimer('time-display'), dt: getTimer('time-dt')})
      setMeridiem(getTimer('meridiem'))
      const timer = setInterval(setTimer, 125)
      return () => {
          clearInterval(timer)
      }
  }, [])


  return (
    <span>
      <time dateTime={date.dt}>{date.display}</time>&nbsp;
      <time dateTime={time.dt}>{time.display}</time><span>&nbsp;{meridiem}</span>
    </span>
  );
}