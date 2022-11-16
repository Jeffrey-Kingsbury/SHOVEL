import { useContext, useState } from "react";
import styled from "styled-components";
import ShovelIcon from "../img/shovel.png";
import { playerContext } from "../PlayerContext";
import moneySrc from "../img/dollar.png";

const ShovelButton = () => {
    const { shovelManualClick, gameData, setGameData } = useContext(playerContext);
    const [lastClick, setLastClick] = useState(0);


    const clickSpeedCheck = () => {
        if(!gameData.unlockedAchievements.unlocked.includes("fastest")){
            const time = new Date().getTime();
            setLastClick(new Date().getTime());
            if(gameData.fastestClick > time - lastClick){
                setGameData({...gameData, fastestClick:time - lastClick})
            }
        }
    }

    return (
        <Wrapper onClick={(e)=>{shovelManualClick(e.clientX, e.clientY); clickSpeedCheck();}} id="shovelButton">
            {/* <Img src={ShovelIcon} alt="Shovel!" draggable={false} onContextMenu={(e)=>{e.preventDefault()}}/> */}
            <h1>DIG!</h1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
aspect-ratio: 1/1;
height: 35%;
border-radius: 50%;
background-color: #e1e4e8;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 15px rgba(0,0,0,0.8);
border: 2px solid;
cursor: pointer;
transition: all ease-in-out .08s;
user-select: none;

&:hover{
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0,0,0,0.5);
}

&:active{
    transform: scale(0.97);
    box-shadow: 0px 0px 15px rgba(0,0,0,1);
}

  @media (min-width: 769px) {
    width: 600px;
    height: 600px;
  }
`;

const Img = styled.img`
height: 15rem;
`;

export default ShovelButton;