import { useContext } from "react";
import styled from "styled-components";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { playerContext } from "../PlayerContext";

const ShopItem = ({name, tippy, price, produce, img, owned}) => {
    const { purchaseHelp } = useContext(playerContext);

    return (
        <TippyWithStyle 
        content={tippy}
        placement="left"
        >
        <Wrapper onClick={() => {purchaseHelp(name)}}>
            <IconContainer>
                <Icon src={img} alt={`Purchase a ${name}`} draggable={false} onContextMenu={(e)=>{e.preventDefault()}}/>
            </IconContainer>
            <DataContainer>
                <Name>{name}</Name>
                <Price>Price: {price > 99999 ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : price}$</Price>
                <Produce>Produces: {produce  > 99999 ? produce.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : produce}$/second</Produce>
                <Owned>Owned: {owned}</Owned>
            </DataContainer>
        </Wrapper>
        </TippyWithStyle>
    );
};

const TippyWithStyle = styled(Tippy)`
    min-height: 100px;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    opacity: 90%;
    z-index: 9999;
`;

const Wrapper = styled.div`
padding: .25rem 0;
width: 90%;
min-height: 8rem;
background-color: beige;
margin: 30px 0 0 0;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: flex-start;
user-select: none;
box-shadow: 0px 5px 15px rgba(0,0,0,0.8);

cursor: pointer;
transition: all ease-in-out .08s;

&:hover{
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0,0,0,0.5);
}

&:active{
    transform: scale(0.97);
    box-shadow: 0px 0px 15px rgba(0,0,0,1);
}
`;

const IconContainer = styled.div`
height: 100%;
width: 30%;
display: flex;
align-items: center;
justify-content: center;
`;

const Icon = styled.img`
width: 90%;
`;

const DataContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 0 0 1rem;
`;

const Name = styled.h3`
text-align: left;
margin: .5rem 0;
`;

const Price = styled.p`
text-align: left;
margin: 0;
`;

const Produce = styled.p`
text-align: left;
margin: 0;
`;

const Owned = styled.h3`
width: 100%;
text-align: left;
margin: 10px 0;
`;

export default ShopItem;