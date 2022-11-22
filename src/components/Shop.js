import { useContext } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { playerContext } from "../PlayerContext";
import { upgradeItems } from "../upgradeItems";
import WalletSrc from "../img/wallet.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Shop = () => {
  const { gameData, hires } = useContext(playerContext);

  const getOwned = (name) => {
    if (name === undefined) {
      return 0
    }

    if (!gameData.purchases[name]) {
      return 0
    }

    const owned = (gameData.purchases[name].qty)
    const price = (gameData.purchases[name].price)
    const produce = (gameData.purchases[name].produce)

    return { owned: owned, price: price, produce: produce };

  };

  return (
    <Wrapper>
      <TitleMobile><Img draggable="false" src={WalletSrc} alt="Your current Wallet" />{gameData.wallet > 99999 ? gameData.wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.wallet}$</TitleMobile>
      <Title>The shop</Title>
      <People>
        {
          Object.entries(hires).map(e => {
            const id = e[0];
            return <ShopItem key={e[0]} locked={hires[id].lock(gameData)} id={id} name={e[1].name} price={getOwned(id).price} produce={getOwned(id).produce} owned={getOwned(id).owned} tippy={e[1].tippy} img={e[1].img} />

          })}
      </People>
    </Wrapper>
  );
};


const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin: auto;
@media (min-width: 769px) {
    height: 50%;
    width: 90%;
  }
`;

const Title = styled.h1`
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

const TitleMobile = styled.h1`
width: 90%;
height: 5%;
background-color: #e1e4e8;
border: 2px solid;
border-radius: 10px;
display: none;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
font-size: medium;
@media (max-width: 768px) {
    display: flex;
  }
`;

const Img = styled.img`
height: 90%;
margin: 0 1rem;
user-select: none;
`;

const People = styled.div`
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border: 2px solid;
border-radius: 10px;
overflow-x: auto;
padding: 0 0 1rem 0;
@media (max-width: 768px) {
   width:100%;
   height: 100%;
   border-radius: 0;
   border: 0;
   background-color: transparent;
  }

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

@media (min-width: 769px) {
    height: 100%;
    width: 100%;
    background-color: #e1e4e8;
    contain: content;
  }
`;



export default Shop;