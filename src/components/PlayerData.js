import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import WalletSrc from "../img/wallet.png";
import AutomationSrc from "../img/shovel.png";
import AchievementSrc from "../img/trophy.png";
import LockIconSrc from "../img/padlock.png";
import ClickSrc from "../img/tap.png";
import AutoClickSrc from "../img/mouse-clicker.png";

import ls from 'localstorage-slim';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const PlayerData = () => {
    const { wallet, calculatePerSecond, hires, playerData, purchases } = useContext(playerContext);
    const getOwned = (name) => {
        if (name === undefined) {
            return 0
        }

        let owned = 0;
        let price = 0;
        let produce = 0;

        purchases.every((e, i) => {
            if (Object.keys(e)[0] === name) {
                owned = (purchases[i][name])
                price = (purchases[i].data[0].price)
                produce = (purchases[i].data[0].produce)
                return false;
            }
            return true;
        })

        return { owned: owned, price: price, produce: produce };

    };
    return (
        <Wrapper>
            <Title>Stats             
            <button onClick={() => { localStorage.clear(); window.location.reload(); }}>reset</button>
            <button onClick={() => { localStorage.clear(); ls.set("!@$fd!#@%", 100000000000, { encrypt: true }); window.location.reload(); }}>reset with money</button>
</Title>
            
            <WalletContainer>
            <WalletImg draggable="false" src={WalletSrc} alt="Your wallet" /> 
            <span>
            {wallet > 99999 ? wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : wallet}$ / Current
               <hr style={{margin:".5rem 0", border:"1px solid"}}/>
               {playerData.lifetimeWallet > 99999 ? playerData.lifetimeWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : playerData.lifetimeWallet}$ / Lifetime
            </span>

            <WalletImg draggable="false" src={WalletSrc} alt="Your wallet" /> 
            <span>
            {playerData.lifetimeClickWallet > 99999 ? playerData.lifetimeClickWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : playerData.lifetimeClickWallet}$ / Lifetime (manual)
               <hr style={{margin:".5rem 0", border:"1px solid"}}/>
               {playerData.lifetimeAutoWallet > 99999 ? playerData.lifetimeAutoWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : playerData.lifetimeAutoWallet}$ / Lifetime (auto)
            </span>
           </WalletContainer>

            <AutoContainer>
                <WalletImg draggable="false" src={AutomationSrc} alt="Your current automation" /> {calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.
                <HiresContainer heightCalc={Math.ceil(Object.keys(hires[0]).length / 4) * 100 - 100}>
                    {
                        Object.entries(hires[0]).map(e => {
                            const id = e[1];
                            return <HiresWrapper key={e[0]}><Hires locked={id.lock(playerData, purchases)} src={!id.lock(playerData, purchases) ? id.img : LockIconSrc} />X{getOwned(e[0]).owned}</HiresWrapper>

                        })}
                </HiresContainer>
            </AutoContainer>

            <WalletContainer>
            <WalletImg draggable="false" src={AchievementSrc} alt="Your achievement count" /> 0 / 50
            </WalletContainer>
            
            <AutoContainer>
            <WalletImg draggable="false" src={ClickSrc} alt="Your manual click count" /> {playerData.manualClicksLT}
            </AutoContainer>
            
            <WalletContainer>
            <WalletImg draggable="false" src={AutoClickSrc} alt="Your auto click count" /> {playerData.autoClicksLT}
            
            </WalletContainer>

        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
`;

const Title = styled.h1`
height: 4rem;
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const WalletContainer = styled.div`
min-height: 10%;
display: flex;
align-items: center;
user-select: none;
font-size: larger;
position: relative;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
padding: 5px 0;
`;

const HiresContainer = styled.div`
width: 400px;
height: ${props => `${props.heightCalc}px`};
bottom: ${props => `-${props.heightCalc}px`};
padding: 0 1rem;
position: absolute;
background-color: rgba(0,0,0,0.7);
color: white;
display: grid;
grid-template-columns: repeat(auto-fill, 100px);
align-items: center;
visibility: hidden;
z-index:999999;
`;

const AutoContainer = styled.div`
height: 10%;
display: flex;
align-items: center;
user-select: none;
font-size: larger;
position: relative;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
margin: 1rem 0;
padding: 5px 0;
&:hover ${HiresContainer}{
    visibility: visible;
}
`;

const WalletImg = styled.img`
height: 3rem;
margin: 0 1rem;
user-select: none;
`;


const HiresWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;

`;

const Hires = styled.img`
width: 40px;
margin: 0 10px;
`;

export default PlayerData;