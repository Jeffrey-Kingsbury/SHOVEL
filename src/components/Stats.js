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

      <Container>
        <Desc>Achievements:</Desc>
        <Qty>{gameData.unlockedAchievements.unlocked.length}/
          {Object.keys(achievements).length}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Total Clicks
        </Desc>
        <Qty>
          {gameData.manualClicksLT}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Money (Lifetime)
        </Desc>
        <Qty>
          {gameData.lifetimeWallet}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Money (Auto)
        </Desc>
        <Qty>
          {gameData.lifetimeAutoWallet}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Money (Clicks)
        </Desc>
        <Qty>
          {gameData.lifetimeClickWallet}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Fastest Click
        </Desc>
        <Qty>
          {gameData.fastestClick}ms
        </Qty>
      </Container>

      <Container>
        <Desc>
          Purchased Upgrades
        </Desc>
        <Qty>
          {gameData.purchasedUpgrades.length}/
          {Object.keys(gameData.upgrades).length}
        </Qty>
      </Container>

      <Container>
        <Desc>
          Total Purchases
        </Desc>
        <Qty>
          {totalPurchases}
        </Qty>
      </Container>

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

const Container = styled.div`
display:flex;
width: 100%;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
background-color: #e1e4e8;
justify-content: flex-start;
border: 1px solid;
margin: auto 0;
`;

const Desc = styled.p`
width: 75%;
margin-left: 5px;
`;

const Qty = styled.p`
width: 25%;
`;

export default Stats;
