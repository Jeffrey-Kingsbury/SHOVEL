import styled from "styled-components";
import ShovelButton from "./ShovelButton";

const ShovelContainer = () => {
    return(
        <Wrapper>
            <ShovelButton />
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
@media (max-width: 768px) {
   height: 50vh;
  }
`;

export default ShovelContainer;