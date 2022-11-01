import styled from "styled-components";

const PlayerData = () => {
    return (
        <Wrapper>
            PLAYER DATA
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