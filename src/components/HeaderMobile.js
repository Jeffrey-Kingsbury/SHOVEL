import styled from "styled-components";
import cartSrc from "../img/shopping-cart.png";
import shovelSrc from "../img/shovel.png";
import achievementSrc from "../img/trophy.png";
import statsSrc from "../img/pie-chart.png";

const HeaderMobile = ({activeScreen, setActiveScreen}) =>{
    return(<Wrapper>
        <Icon onClick={()=>{setActiveScreen("shovel")}} src={shovelSrc} alt="Shovel" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("shop")}} src={cartSrc} alt="Store" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("stats")}} src={statsSrc} alt="Stats" draggable="false"/>
        <Icon onClick={()=>{setActiveScreen("achievements")}} src={achievementSrc} alt="Achievements" draggable="false"/>
    </Wrapper>)
};

const Wrapper = styled.div`
background-color: aliceblue;
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
box-shadow: 0 5px 5px 0 rgba(0,0,0,0.5);
z-index: 999999;
`;

const Icon = styled.img`
height: 60%;
cursor: pointer;
`;

export default HeaderMobile;