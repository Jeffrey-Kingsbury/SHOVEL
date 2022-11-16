import { useContext } from "react";
import styled from "styled-components";
import achievementSrc from "../img/trophy.png";
import statsSrc from "../img/pie-chart.png";
import settingsSrc from "../img/settings.png";
import WalletSrc from "../img/wallet.png";
import AutomationSrc from "../img/shovel.png";
import { playerContext } from "../PlayerContext";

const HeaderDesktop = ({activeScreen, setActiveScreen}) => {
    const { gameData, calculatePerSecond } = useContext(playerContext);

    return (
        <Wrapper>
            <StatsWrapper>
            <Title><Img draggable="false" src={WalletSrc} alt="Your current Wallet" />{gameData.wallet > 99999 ? gameData.wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.wallet}$</Title>
            <Title><Img draggable="false" src={AutomationSrc} alt="Your current automation" />{calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.</Title>
            </StatsWrapper>
            <Icon onClick={()=>{setActiveScreen("shovel")}} src={AutomationSrc} alt="Shovel" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("stats")}} src={statsSrc} alt="Stats" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("settings")}} src={settingsSrc} alt="Settings" draggable="false"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
height: 5%;
width: 100%;
background-color: white;
box-shadow: 0 5px 10px 1px rgba(0, 0, 0, .5);
display: flex;
justify-content: flex-end;
align-items: center;
gap: 15px;
`;

const Icon = styled.img`
height: 70%;
margin: 15px;
cursor: pointer;
transition: all .1s ease-in-out;
user-select: none;

&:hover{
        transform: scale(1.05);
    }

    &:active{
        transform: scale(.95);
    }
`;

const StatsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`;

const Title = styled.h1`
width: 30%;
height: 80%;
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
height: 2rem;
margin: 0 1rem;
user-select: none;
`;

export default HeaderDesktop;