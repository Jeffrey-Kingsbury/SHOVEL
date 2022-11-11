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
width: 45%;
height: 40%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
   height: 50vh;
  }
`;

export default ShovelContainer;