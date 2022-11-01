import Game from "./components/Game";
import PlayerContext from "./PlayerContext";

function App() {


  return (
    
    <PlayerContext>
    <Game/>
    </PlayerContext>
    
  );
}

export default App;
