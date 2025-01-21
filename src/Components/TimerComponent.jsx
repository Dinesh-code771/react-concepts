import React from "react";

let timeConfig = {
  HH: {
    value: "00",
    factor: 60 * 60 * 1000,
    placeHolder: "HH",
  },
  MM: {
    value: "00",
    factor: 60 * 1000,
    placeHolder: "MM",
  },
  SS: {
    value: "00",
    factor: 1000,
    placeHolder: "SS",
  },
  MS: {
    value: "00",
    factor: 1,
    placeHolder: "MS",
  },
};

const times = Object.keys(timeConfig);
export default function TimerComponent() {
  const [timeConfigState, setTimeConfigState] = React.useState(timeConfig);
  const [time, setTime] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const currentRef = React.useRef();
  //function to handle start button
  function handleStart() {
    let timeInmilliseconds = 0;
    times.forEach((time) => {
      timeInmilliseconds +=
        timeConfigState[time].value * timeConfigState[time].factor;
    });
    let timerTime = timeInmilliseconds + new Date().getTime();
    currentRef.current = setInterval(() => {
      let time = timerTime - new Date().getTime();
      if (time <= 0) {
        clearInterval(currentRef.current);
      }
      setTime(time);
    }, 10);
  }
  //function to handle pause button
  function handlePause() {
    clearInterval(currentRef.current);
    setIsPaused(true);
  }
  //function to handle reset button
  function handleReset() {
    clearInterval(currentRef.current);
    setIsPaused(false);
    setTime(0);
    setTimeConfigState(timeConfig);
  }
  //function to handle resume button
  function handleResume() {
    let timer = time + new Date().getTime();
    currentRef.current = setInterval(() => {
      let time = timer - new Date().getTime();
      if (time <= 0) {
        clearInterval(currentRef.current);
      }
      setTime(time);
    }, 10);
    setIsPaused(false);
  }
  //function to format time
  function formatTime(time) {
    let HH = Math.floor(time / (60 * 60 * 1000));
    let MM = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    let SS = Math.floor((time % (60 * 1000)) / 1000);
    let MS = Math.floor(time % 1000);
    return `${HH}:${MM}:${SS}:${MS}`;
  }
  return (
    <div className="w-full h-screen  bg-black flex flex-col gap-10 justify-center items-center text-white">
      <h2 className="font-mono text-[30px] ">Timer</h2>
      <div className="wrapper flex gap-5">
        {times.map((time) => {
          return (
            <input
              type="number"
              min={0}
              value={timeConfigState[time].value}
              className="w-20 h-20 text-black text-[25px] font-mono text-center"
              placeholder={timeConfigState[time].placeHolder}
              onChange={(e) => {
                setTimeConfigState({
                  ...timeConfigState,
                  [time]: {
                    ...timeConfigState[time],
                    value: e.target.value,
                  },
                });
              }}
            />
          );
        })}
      </div>
      <p className="text-white">{time && formatTime(time)}</p>
      <div className="buttonsWrapper flex gap-5 ">
        <button
          onClick={handleStart}
          className="border py-3 px-8 rounded-md overflow-hidden"
        >
          Start
        </button>
        <button
          onClick={isPaused ? handleResume : handlePause}
          className="border py-3 px-8 rounded-md overflow-hidden"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={handleReset}
          className="border py-3 px-8 rounded-md overflow-hidden"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
