import styled from "styled-components";
import cartSrc from "../img/shopping-cart.png";
import upgradeSrc from "../img/upgrade.png";
import shovelSrc from "../img/shovel.png";
import achievementSrc from "../img/trophy.png";
import statsSrc from "../img/pie-chart.png";
import settingsSrc from "../img/settings.png";

const HeaderMobile = ({activeScreen, setActiveScreen}) =>{
    return(<Wrapper>
        <Icon onClick={()=>{setActiveScreen("shovel")}} src={shovelSrc} alt="Shovel" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("shop")}} src={cartSrc} alt="Store" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("upgrade")}} src={upgradeSrc} alt="Upgrades" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("stats")}} src={statsSrc} alt="Stats" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("achievements")}} src={achievementSrc} alt="Achievements" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("settings")}} src={settingsSrc} alt="Settings" draggable="false"/>
    </Wrapper>)
};

const Wrapper = styled.div`
background-color: #9DC4C4;
height: 4rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
box-shadow: 0 5px 5px 0 rgba(0,0,0,0.5);
z-index: 999999;
`;

const Icon = styled.img`
height: 3rem;
cursor: pointer;
`;

export default HeaderMobile;