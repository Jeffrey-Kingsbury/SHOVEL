import styled from "styled-components";
import ShovelButton from "./ShovelButton";

const GameScreen = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`;


const GameArea = ({playerData})=>{

return <GameScreen>
    <ShovelButton>
        <img src="/images/shovel.png" alt="SHOVEL"/>
    </ShovelButton>

</GameScreen>
};

export default GameArea;