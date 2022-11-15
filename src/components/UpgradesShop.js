import { useState, useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import { upgradeItems } from "../upgradeItems";
import WalletSrc from "../img/wallet.png";

const UpgradesShop = () => {
    const [selectedUpgrade, setSelectedUpgrade] = useState();
    const { gameData, purchaseUpgrade} = useContext(playerContext);

    const submitPurchase = () => {
        if(purchaseUpgrade(selectedUpgrade)){
            setSelectedUpgrade(!selectedUpgrade)
        };
    };

    return(<Wrapper>

        <Title><Img draggable="false" src={WalletSrc} alt="Your current Wallet" />{gameData.wallet > 99999 ? gameData.wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.wallet}$</Title>
        <Title>Upgrades Shop</Title>
        <ItemsContainer>
        {
                    Object.keys(upgradeItems).map(e => {
                        if (upgradeItems[e].lock(gameData) === false) {
                            return <UpgradeItem onClick={()=>{setSelectedUpgrade(upgradeItems[e].id)}} key={upgradeItems[e].id} draggable="false" src={upgradeItems[e].src} alt={upgradeItems[e].name} />
                        }else{ 
                            return false
                        }
                    })
                }
        </ItemsContainer>

        <DescriptionContainer>
            <DescriptionWrapper>
                {!selectedUpgrade && 
                "Select an upgrade"}

                {selectedUpgrade &&
                <>
                <Name>{upgradeItems[selectedUpgrade].name}</Name>
                <hr style={{width:"90%"}}/>
                <Price>{upgradeItems[selectedUpgrade].price}$</Price>
                <Desc>{upgradeItems[selectedUpgrade].desc}</Desc>
                </>

                
                }
            </DescriptionWrapper>
                    <PurchaseButton onClick={()=>{submitPurchase()}} disabled={!selectedUpgrade}>Purchase</PurchaseButton>
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
width: 90%;
height: 5%;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
font-size: medium;
`;

const ItemsContainer = styled.div`
width: 98%;
height: 30%;

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
width: 98%;
height: 35%;
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
width: 98%;
display: flex;
flex-direction: column;
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

const UpgradeItem = styled.img`
    width: 50px;
    transition: all .1s ease-in-out;
    border: 1px solid black;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.3);
    padding: 5px;
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, .5);
    cursor: pointer;
    user-select: none;
    margin: 5px 0;

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 5px 8px 5px rgba(0, 0, 0, .2);
    }

    &:active{
        transform: scale(.95);
        box-shadow: 0 0 1px 5px rgba(0, 0, 0, .2);
    }
`;

const Name = styled.p`
font-size: medium;
line-height: 25px;
margin: 5px;
`;

const Price = styled.p`
font-size: large;
margin: 5px;
`;

const Desc = styled.p`
font-size: x-small;
line-height: 25px;
`;

const Img = styled.img`
height: 90%;
margin: 0 1rem;
user-select: none;
`;

export default UpgradesShop;