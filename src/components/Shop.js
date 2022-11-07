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

        purchases.every((e, i) => {
            if(Object.keys(e)[0] === name){
                owned = (purchases[i][name])
                return false;
            }
            return true;
        })

        return owned
        
    };

    return (
        <Wrapper>
            <Title>"Hire" help</Title>
            <People>
                {
                    Object.entries(hires[0]).map(e => {
                        const id = e[1];
                        return <ShopItem key={e[0]} locked={id.lock(playerData)} id={e[0]} name={id.name} price={id.price} produce={id.produce} owned={getOwned(e[0])} tippy={id.tippy} img={id.img} />

                    })}
            </People>

            <Title>Upgrades</Title>
            <Upgrades>

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
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: flex-start;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
overflow-x: auto;
padding: 0 0 1rem 0;
`;

export default Shop;