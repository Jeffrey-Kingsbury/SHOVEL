import { useContext } from "react";
import styled from "styled-components";
import Bg from "./Bg";
import ShovelContainer from "./ShovelContainer";
import PlayerData from "./PlayerData";
import Shop from "./Shop";
import { playerContext } from "../PlayerContext";
import useInterval from "../use-interval.hook";

const Game = () => {
  const { wallet, setWallet, calculatePerSecond } = useContext(playerContext);

  useInterval(() => {
    setWallet(wallet + calculatePerSecond());
  }, 1000);

  return (
    <Wrapper>
      <Bg />

      <Left>
        <PlayerData />
        <ShovelContainer />
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
  min-width: 600px;
  width: 25%;
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
