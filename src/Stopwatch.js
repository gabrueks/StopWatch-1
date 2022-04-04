import React from 'react';
import useTimer from 'easytimer-react-hook';
import './App.css';

function Stopwatch({ removeStopwatch, index }) {
  const [timer] = useTimer({
    seconds: '00',
    minutes: '00',
    hours: '00',
  });

  function startClock() {
    timer.start();
  }

  function stopClock() {
    timer.stop();
  }

  function pauseClock() {
    timer.pause();
  }

  return (
    <>
      <div className="timerInfo">
          <h1>{timer.getTimeValues().toString()}</h1>
      </div>
      <div className="buttons">
          <button onClick={startClock}>Start</button>
          <button onClick={pauseClock}>Pause</button>
          <button onClick={stopClock}>Stop</button>
          <button onClick={() => {removeStopwatch(index)}}>-</button>
      </div>
    </>
  );
}

export default Stopwatch;
