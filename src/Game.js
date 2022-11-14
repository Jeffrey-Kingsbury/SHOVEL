import { useContext, useState } from "react";
import styled from "styled-components";
import Bg from "./components/Bg";
import ShovelContainer from "./components/ShovelContainer";
import Achievements from "./components/Achievements";
import PlayerData from "./components/PlayerData";
import Shop from "./components/Shop";
import HeaderMobile from "./components/HeaderMobile";
import { playerContext } from "./PlayerContext";
import useInterval from "./use-interval.hook";


const Game = () => {
  const { calculatePerSecond, gameData, setGameData } = useContext(playerContext);
  const [activeScreen, setActiveScreen] = useState("shovel"); //shovel, store, upgrade, stats, achievements, settings

  useInterval(() => {
    if (calculatePerSecond() > 0) {
      setGameData({ ...gameData, wallet: gameData.wallet + calculatePerSecond(), lifetimeWallet: gameData.lifetimeWallet + calculatePerSecond(), lifetimeAutoWallet: gameData.lifetimeAutoWallet + calculatePerSecond(), autoClicksLT: gameData.autoClicksLT + 1 })
    }
  }, 1000);

  return (
    <Wrapper>
      <Bg />
    </Wrapper>
  );
};



const Wrapper = styled.div`
  font-family: "Press Start 2P", cursive;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;


export default Game;
