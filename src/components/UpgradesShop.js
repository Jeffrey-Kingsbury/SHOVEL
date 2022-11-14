import { useState } from "react";
import styled from "styled-components";

const UpgradesShop = () => {
    const [selectedUpgrade, setSelectedUpgrade] = useState();

    return(<Wrapper>

        
        <Title>Upgrades Shop</Title>
        <ItemsContainer>

        </ItemsContainer>

        <DescriptionContainer>
            <DescriptionWrapper>
                {!selectedUpgrade && 
                "Select an upgrade"}
            </DescriptionWrapper>
                    <PurchaseButton disabled={!selectedUpgrade}>Purchase</PurchaseButton>
        </DescriptionContainer>
    </Wrapper>);
};

const Wrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

const Title = styled.div`
height: 5%;
width: 90%;
padding: 5px 0;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: medium;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
`;

const ItemsContainer = styled.div`
width: 95%;
height: 40%;

display: grid;
grid-template-columns: repeat(auto-fill, 30%);
justify-content: center;
column-gap: 5px;
row-gap: 0;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
overflow-y: auto;
overflow-x: hidden;
padding: 15px 0;
`;

const DescriptionContainer = styled.div`
width: 95%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.8);
color: white;
border: 2px solid black;
border-radius: 10px;
overflow-y: auto;
overflow-x: hidden;
padding: 15px 0;
`;

const DescriptionWrapper = styled.div`
height: 70%;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;


const PurchaseButton = styled.button`
height: 3rem;
width: 90%;
border-radius: 15px;
background-color: ${props => !props.disabled ? "lightgreen" : "lightgray"};
font-size: larger;
font-family: 'press start 2p';
`;
export default UpgradesShop;