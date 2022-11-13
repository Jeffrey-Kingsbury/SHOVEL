import { useContext, useState } from "react";
import styled from "styled-components";
import Bg from "./Bg";
import ShovelContainer from "./ShovelContainer";
import Achievements from "./Achievements";
import PlayerData from "./PlayerData";
import Shop from "./Shop";
import HeaderMobile from "./HeaderMobile";
import { playerContext } from "../PlayerContext";
import useInterval from "../use-interval.hook";


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

      {
      <DesktopView>
      <Left>

        <StatsWrapper>
          <PlayerData />
        </StatsWrapper>

        <ButtonWrapper>
          <ShovelContainer />
          <Achievements />
        </ButtonWrapper>

      </Left>

      <Right>
        <Shop />
      </Right>
      </DesktopView> }

      <MobileView>
        <HeaderMobile activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
        {activeScreen === "shovel" && 
          <ShovelContainer />
        }

        {activeScreen === "shop" &&
        <Shop />
        }
      </MobileView>

    </Wrapper>
  );
};

const MobileView = styled.div`
display: none;
height: 100vh;
width: 100vw;
justify-content: flex-start;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
    display: flex;
  }
`;
const DesktopView = styled.div`
display: block;

@media (max-width: 768px) {
    display: none;
  }
`;

const StatsWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
  font-family: "Press Start 2P", cursive;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: fill-available;
  }
`;


const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: space-around;
align-items: center;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  @media (max-width: 768px) {
    height: fill-available;
  }
`;

const Right = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Game;
