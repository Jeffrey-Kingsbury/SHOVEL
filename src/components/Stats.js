import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";

const Stats = () => {
    const { gameData } = useContext(playerContext);
    console.log(gameData)
    return(
        <Wrapper>
            <Title>Stats</Title>
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
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

export default Stats;