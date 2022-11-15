import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";

const Stats = () => {
  const { gameData, achievements } = useContext(playerContext);
  
    let totalPurchases = 0;
    gameData.purchases.forEach((e) => {
        totalPurchases += e[Object.keys(e)[0]];    
    });
  
    return (
    <Wrapper>
      <Title>Stats</Title>

      <p>
        Achievements: {gameData.unlockedAchievements.unlocked.length}/
        {Object.keys(achievements).length}
      </p>
      <p>Total clicks: {gameData.manualClicksLT}</p>
      <p>Lifetime money: {gameData.lifetimeWallet}</p>
      <p>Lifetime money (Automation): {gameData.lifetimeAutoWallet}</p>
      <p>Lifetime money (Click): {gameData.lifetimeClickWallet}</p>
      <p>Fastest click: {gameData.fastestClick}ms</p>
      <p>
        Upgrades: {gameData.purchasedUpgrades.length}/
        {Object.keys(gameData.upgrades).length}
      </p>
      <p>
        Total purchases:
        {totalPurchases}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
width: 90%;
height: 5%;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
font-size: medium;
`;

export default Stats;
