import { useContext } from "react";
import styled from "styled-components";
import ShovelIcon from "../img/shovel.png";
import { playerContext } from "../PlayerContext";
import moneySrc from "../img/dollar.png";

const ShovelButton = () => {
    const { shovelManualClick } = useContext(playerContext);


    const addEl = (x, y)=>{
        const el = document.createElement('img');
        el.src = `${moneySrc}`;
        el.style.width = "50px"
        el.style.color = "green";
        el.style.position = "absolute";
        el.style.top = y + 'px';
        el.style.left = x + 'px';
        el.style.zIndex = 9999;
        el.style.transform = `rotate(25deg)`;
        el.style.pointerEvents = 'none';
        el.animate({top:0, opacity:0}, {duration:2000, iterations:1});
        document.body.appendChild(el);
        setTimeout(()=>{
            el.remove();
        }, 1950);
    };

    return (
        <Wrapper onClick={(e)=>{addEl(e.clientX, e.clientY); shovelManualClick();}} id="shovelButton">
         <Img src={ShovelIcon} alt="Shovel!" draggable={false} onContextMenu={(e)=>{e.preventDefault()}}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
height: 70%;
aspect-ratio: 1/1;
border-radius: 50%;
background-color: #c1d3fe;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 15px rgba(0,0,0,0.8);

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

@media (max-width: 768px) {
    width: 60%;
    height: auto;
  }
`;

const Img = styled.img`
height: 60%;
`;

export default ShovelButton;