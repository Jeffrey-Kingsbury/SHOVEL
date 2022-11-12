import { useContext } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { playerContext } from "../PlayerContext";
import { upgradeItems } from "../upgradeItems";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Shop = () => {
    const { gameData, hires, purchaseUpgrade} = useContext(playerContext);

    const getOwned = (name) => {
        if (name === undefined) {
            return 0
        }

        let owned = 0;
        let price = 0;
        let produce = 0;

        gameData.purchases.every((e, i) => {
            if (Object.keys(e)[0] === name) {
                owned = ( gameData.purchases[i][name])
                price = ( gameData.purchases[i].data[0].price)
                produce = ( gameData.purchases[i].data[0].produce)
                return false;
            }
            return true;
        })

        return { owned: owned, price: price, produce: produce };

    };

    return (
        <Wrapper>
            <Title>"Hire" help</Title>
            <People>
                {
                    Object.entries(hires[0]).map(e => {
                        const id = e[1];
                        return <ShopItem key={e[0]} locked={id.lock(gameData)} id={e[0]} name={id.name} price={getOwned(e[0]).price} produce={getOwned(e[0]).produce} owned={getOwned(e[0]).owned} tippy={id.tippy} img={id.img} />

                    })}
            </People>

            <Title>Upgrades</Title>
            <Upgrades>

                {
                    Object.keys(upgradeItems).map(e => {
                        if (upgradeItems[e].lock(gameData) === false) return <TippyWithStyle
                            key={upgradeItems[e].name}
                            content={
                                (
                                    <div style={{ padding: "5px" }}>
                                        <strong>
                                            {upgradeItems[e].name} - {upgradeItems[e].price}$
                                            <hr />
                                        </strong>
                                        <strong style={{ margin:0, textDecoration:"underline" }}>
                                            Effect:
                                        </strong>
                                        <p style={{ marginTop:0 }}>{upgradeItems[e].desc}</p>
                                        <i style={{ fontSize: "medium" }}>"{upgradeItems[e].tippy}"</i>
                                    </div>
                                )
                            }
                            placement="left"
                        >
                            <UpgradeItem onClick={()=>{purchaseUpgrade(upgradeItems[e].id)}} key={upgradeItems[e].id} draggable="false" src={upgradeItems[e].src} alt={upgradeItems[e].name} />
                        </TippyWithStyle>
                        else return false
                    })
                }

            </Upgrades>
        </Wrapper>
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
/* width */
::-webkit-scrollbar {
  width: 5px;
  display: block;
  border-radius: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 5px;

}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
  border-radius: 5px;

}
`;

const Upgrades = styled.div`
width: 100%;
height: 20%;
display: grid;
grid-template-columns: repeat(auto-fill, 70px);
justify-content: center;
column-gap: 5px;
row-gap: 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
overflow-y: auto;
overflow-x: hidden;
padding: 15px 0;

/* width */
::-webkit-scrollbar {
  width: 5px;
  display: block;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

const UpgradeItem = styled.img`
    width: 50px;
    transition: all .1s ease-in-out;
    border: 4px solid black;
    border-radius: 5px;
    background-color: beige;
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

export default Shop;