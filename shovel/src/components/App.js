import Header from "./Header";
import player  from "../data/playerData";
import GameScreen from "./GameArea";

function App() {
  return (
    <>
      <Header />
      <GameScreen playerData={player} />
    </>
  );
}

export default App;
