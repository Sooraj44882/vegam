
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  function reset() {
    setRunning(false);
    setSeconds(25 * 60);
  }

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="mt-6 max-w-3xl rounded-xl border border-neutral-800 bg-neutral-900 p-5">
      <h2 className="text-xl font-bold">Focus Timer</h2>

      <p className="my-5 text-center text-5xl font-bold text-red-400">
        {String(mins).padStart(2, "0")}:
        {String(secs).padStart(2, "0")}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setRunning(!running)}
          className="rounded-lg bg-red-400 px-5 py-2 text-black hover:bg-red-300"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={reset}
          className="rounded-lg bg-neutral-700 px-5 py-2 hover:bg-neutral-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;