import { useState, useEffect } from 'react'

const useTimer = ({
  hoursMinSecs,
  onTimeEnd,
  start = false,
  restart = false,
  timer = true
}) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds])

  const tick = () => {
    if (timer) {
      if (restart) {
        setTime([hours, minutes, seconds])
      }
      if (start) {
        if (hrs === 0 && mins === 0 && secs === 0) {
          onTimeEnd()
        } else if (mins === 0 && secs === 0) {
          setTime([hrs - 1, 59, 59])
        } else if (secs === 0) {
          setTime([hrs, mins - 1, 59])
        } else {
          setTime([hrs, mins, secs - 1])
        }
      }
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return [hrs, mins, secs]
}

export default useTimer
