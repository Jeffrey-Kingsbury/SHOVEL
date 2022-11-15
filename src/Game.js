import { useContext, useState } from "react";
import styled from "styled-components";
import Bg from "./components/Bg";
import ShovelContainer from "./components/ShovelContainer";
import UpgradesShop from "./components/UpgradesShop";
import Achievements from "./components/Achievements";
import PlayerData from "./components/PlayerData";
import Shop from "./components/Shop";
import MobileNav from "./components/MobileNav";
import { playerContext } from "./PlayerContext";
import useInterval from "./use-interval.hook";
import Stats from "./components/Stats";


const Game = () => {
  const { calculatePerSecond, gameData, setGameData, isMobile } = useContext(playerContext);
  const [activeScreen, setActiveScreen] = useState("shovel"); //shovel, store, upgradesShop, stats, achievements, settings

  useInterval(() => {
    if (calculatePerSecond() > 0) {
      setGameData({ ...gameData, wallet: gameData.wallet + calculatePerSecond(), lifetimeWallet: gameData.lifetimeWallet + calculatePerSecond(), lifetimeAutoWallet: gameData.lifetimeAutoWallet + calculatePerSecond(), autoClicksLT: gameData.autoClicksLT + 1 })
    }
  }, 1000);

  return (
    <Wrapper>
      <Bg />
      {isMobile &&
        <MobileView>
          {activeScreen === "shovel" &&
            <ShovelContainer />
          }

          {activeScreen === "shop" &&
            <Shop />
          }

          {activeScreen === "upgradesShop" &&
            <UpgradesShop />
          }

          {activeScreen === "stats" &&
            <Stats />
          }

          {activeScreen === "achievements" &&
            <Achievements />
          }

          {activeScreen === "settings" &&
            "SETTINGS"
          }

          <MobileNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </MobileView>
      }
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
`;

const MobileView = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
overflow: hidden;
`;


export default Game;
