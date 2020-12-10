import { useState } from 'react';

function AppPure() {
  const [timerValue, setTimerValue] = useState(12400);
  const [timeInterval, setStopWatchInterval] = useState(null);
  const [waitTimeout, setWaitTimeout] = useState(null);

  const startTimer = () => {
    const stopWatch =  setInterval(() => {
      setTimerValue((prevValue) => prevValue + 1);
    }, 1000)
    setStopWatchInterval(stopWatch)
  };

  const stopTimer = () => {
    clearInterval(timeInterval)
  }

  const clearTimer = () => {
    stopTimer();
    setTimerValue(0);
    startTimer();
  }

  const wait = () => {
    if (waitTimeout) {
      clearTimeout(waitTimeout);
      setWaitTimeout(null)
      stopTimer()
    } else {
      const timeout = setTimeout(() => {
        setWaitTimeout(null)
      }, 300)
      setWaitTimeout(timeout);
    }
  }

  const getTime = () => {
    const sec = timerValue % 60;
    const hours = Math.floor(timerValue / 60 / 60)
    const min = Math.floor(timerValue / 60) - (hours * 60)

    return `${hours}:${min}:${sec}`
  }

  return (
    <div className="App">
      {getTime()}
      <div>
        <button onClick={startTimer}>start</button>
      </div>
      <div>
        <button onClick={wait}>wait</button>
      </div>
      <div>
        <button onClick={stopTimer}>stopTimer</button>
      </div>
      <div>
        <button onClick={clearTimer}>clearTimer</button>
      </div>
    </div>
  );
}

export default AppPure;
