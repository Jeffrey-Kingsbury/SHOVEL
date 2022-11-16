import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import ShovelButton from "./ShovelButton";
import WalletSrc from "../img/wallet.png";
import AutomationSrc from "../img/shovel.png";


const ShovelContainer = () => {
  const { gameData, calculatePerSecond, isMobile } = useContext(playerContext);

  return (
    <Wrapper>
      {isMobile &&
        <Span>
          <Title><Img draggable="false" src={WalletSrc} alt="Your current Wallet" />{gameData.wallet > 99999 ? gameData.wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.wallet}$</Title>
          <Title><Img draggable="false" src={AutomationSrc} alt="Your current automation" />{calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.</Title>
        </Span>
      }
      <ShovelButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
@media (max-width: 768px) {
   width: 100%;
   height: 90%;
  }
`;

const Span = styled.span`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
width: 45%;
padding: 5px 0;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: medium;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
@media (max-width: 768px) {
   width: 90%;
  }
`;

const Img = styled.img`
height: 3rem;
margin: 0 1rem;
user-select: none;
`;

export default ShovelContainer;