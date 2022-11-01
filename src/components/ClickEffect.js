import styled from "styled-components";

const ClickEffect = (x, y) =>{
    return(
    <Wrapper x={x} y={y}>

    </Wrapper>
    );
};

const Wrapper = styled.div`
width: 5px;
height: 5px;
background-color: black;
position: absolute;
top: ${props => props.x};
right: ${props => props.y};
`;

export default ClickEffect;