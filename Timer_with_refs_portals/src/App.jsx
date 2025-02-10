import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" tagetTime={1} />
        <TimeChallenge title="Not easy" tagetTime={5} />
        <TimeChallenge title="Getting tough" tagetTime={10} />
        <TimeChallenge title="Pros only" tagetTime={15} />
      </div>
    </>
  );
}

export default App;
