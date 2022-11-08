import { useContext } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { playerContext } from "../PlayerContext";

const Shop = () => {
    const { purchases, playerData, hires } = useContext(playerContext);
    const getOwned = (name)=>{
        if(name === undefined){
            return 0
        }

        let owned = 0;
        let price = 0;
        let produce = 0;

        purchases.every((e, i) => {
            if(Object.keys(e)[0] === name){
                owned = (purchases[i][name])
                price = (purchases[i].data[0].price)
                produce = (purchases[i].data[0].produce)
                return false;
            }
            return true;
        })

        return {owned:owned, price:price, produce:produce};
        
    };

    return (
        <Wrapper>
            <Title>"Hire" help</Title>
            <People>
                {
                    Object.entries(hires[0]).map(e => {
                        const id = e[1];
                        return <ShopItem key={e[0]} locked={id.lock(playerData, purchases)} id={e[0]} name={id.name} price={getOwned(e[0]).price} produce={getOwned(e[0]).produce} owned={getOwned(e[0]).owned} tippy={id.tippy} img={id.img} />

                    })}
            </People>

            <Title>Upgrades</Title>
            <Upgrades>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
                    <UpgradeItem></UpgradeItem>
            </Upgrades>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`;

const Title = styled.h1`
width: 100%;
height: auto;
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const People = styled.div`
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
overflow-x: auto;
padding: 0 0 1rem 0;
`;

const Upgrades = styled.div`
width: 100%;
height: 20%;
display: grid;
grid-template-columns: 100px 100px 100px 100px;
align-items: center;
justify-content: center;
column-gap: 5px;
row-gap: 15px;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
overflow-y: auto;
overflow-x: hidden;
padding: 15px 0;
`;

const UpgradeItem = styled.div`
width: 100px;
height: 100px;
background-color: green;
`;

export default Shop;