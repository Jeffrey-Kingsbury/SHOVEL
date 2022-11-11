import { useContext } from "react";
import styled from "styled-components";
import Bg from "./Bg";
import ShovelContainer from "./ShovelContainer";
import Achievements from "./Achievements";
import PlayerData from "./PlayerData";
import Shop from "./Shop";
import { playerContext } from "../PlayerContext";
import useInterval from "../use-interval.hook";


const Game = () => {
  const { wallet, setWallet, calculatePerSecond, setPlayerData, playerData } = useContext(playerContext);
  useInterval(() => {
    if (calculatePerSecond() > 0) {
      setPlayerData({ ...playerData, lifetimeWallet: playerData.lifetimeWallet + calculatePerSecond(), lifetimeAutoWallet: playerData.lifetimeAutoWallet + calculatePerSecond(), autoClicksLT: playerData.autoClicksLT + 1 })
      setWallet(wallet + calculatePerSecond());
    }
  }, 1000);

  return (
    <Wrapper>
      <Bg />

      <Left>
        <ShovelContainer />
        <BottomWrapper>
        <PlayerData />
        <Achievements />
        </BottomWrapper>
      </Left>

      <Right>
        <Shop />
      </Right>

    </Wrapper>
  );
};

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

const BottomWrapper = styled.div`
display: flex;
width: 100%;
height: 50%;
justify-content: space-around;
align-items: center;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
