import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";

const PlayerData = () => {
    const { wallet } = useContext(playerContext);

    return (
        <Wrapper>
            Wallet: {wallet}$
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 30%;
display: flex;
align-items: center;
justify-content: center;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
@media (max-width: 768px) {
    height: 20vh;
  }
`;

export default PlayerData;