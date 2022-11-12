import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";import ShovelButton from "./ShovelButton";
import WalletSrc from "../img/wallet.png";
import AutomationSrc from "../img/shovel.png";


const ShovelContainer = () => {
    const { wallet, calculatePerSecond, hires, playerData, purchases, achievements, unlockedAchievements } = useContext(playerContext);

    return(
        <Wrapper>
            <Span>
            <Title><Img draggable="false" src={WalletSrc} alt="Your current automation" />{wallet > 99999 ? wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : wallet}$</Title>
            <Title><Img draggable="false" src={AutomationSrc} alt="Your current automation" />{calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.</Title>
            </Span>
            <ShovelButton />
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 50%;
height: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
@media (max-width: 768px) {
   height: 50vh;
  }
`;

const Span = styled.span`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Title = styled.h1`
width: 45%;
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: medium;
`;

const Img = styled.img`
height: 3rem;
margin: 0 1rem;
user-select: none;
`;

export default ShovelContainer;