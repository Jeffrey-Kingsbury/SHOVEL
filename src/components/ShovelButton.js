import styled from "styled-components";
import {TbShovel} from "react-icons/tb";

const ShovelButton = () => {
    return (
        <Wrapper>
            <TbShovel size={100}/>
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

export default ShovelButton;