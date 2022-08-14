import styled from "styled-components";
import player from "../data/playerData";

const Container = styled.button`
border-radius: 100%;
height: 400px;
width: 400px;
background-color:white;
box-shadow: 0px 2px 10px rgba(0,0,0,.3);
display: flex;
justify-content: center;
align-items: center;
transition: all .2s ease-in-out;
outline: none;
border: 0;
user-select: none;

&:hover{
    transform: scale(1.03);
    box-shadow: 0px 2px 15px rgba(0,0,0,.3);
}

&:active{
    transform: scale(.97);
    box-shadow: 0px 2px 5px rgba(0,0,0,.5);
    border: 0;

}
`;

const Image = styled.img`
height: 70%;
`;


const ShovelButton = ()=>{

    function addMoney (){
        player.wallet += 4;
        console.log(player.wallet);
        };
        

return (<>
    <Container onClick={addMoney}>
        <Image src="/images/shovel.png" alt="Shovel logo" draggable="false"/>
    </Container>
</>);
};

export default ShovelButton;