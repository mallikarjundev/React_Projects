import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, tagetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(tagetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < tagetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(tagetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={tagetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {tagetTime} second{tagetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
