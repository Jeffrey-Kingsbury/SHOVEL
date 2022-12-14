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
    const { calculatePerSecond, hires, achievements, gameData, setGameData } = useContext(playerContext);

    const getOwned = (name) => {
        if (name === undefined) {
            return 0
        }

        let owned = 0;
        let price = 0;
        let produce = 0;

        gameData.purchases.every((e, i) => {
            if (Object.keys(e)[0] === name) {
                owned = (gameData.purchases[i][name])
                price = (gameData.purchases[i].data[0].price)
                produce = (gameData.purchases[i].data[0].produce)
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
                <button onClick={() => { localStorage.clear(); ls.set("!@$fd!#@%", 100000000000000, { encrypt: true }); window.location.reload(); }}>reset with money</button>
            </Title>

            <WalletContainer>
                <WalletImg draggable="false" src={WalletSrc} alt="Your wallet" />
                {gameData.lifetimeWallet > 99999 ? gameData.lifetimeWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.lifetimeWallet}$ / Lifetime
                <br />
                {gameData.lifetimeClickWallet > 99999 ? gameData.lifetimeClickWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.lifetimeClickWallet}$ / Lifetime (manual)
                <br />
                {gameData.lifetimeAutoWallet > 99999 ? gameData.lifetimeAutoWallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : gameData.lifetimeAutoWallet}$ / Lifetime (auto)
            </WalletContainer>

            <AutoContainer>
                <WalletImg draggable="false" src={AutomationSrc} alt="Your current automation" /> {calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.
                <HiresContainer heightCalc={Math.ceil(Object.keys(hires[0]).length / 4) * 100 - 100}>
                    {
                        Object.entries(hires[0]).map(e => {
                            const id = e[1];
                            return <HiresWrapper key={e[0]}><Hires locked={id.lock(gameData)} src={!id.lock(gameData) ? id.img : LockIconSrc} />X{getOwned(e[0]).owned}</HiresWrapper>

                        })}
                </HiresContainer>
            </AutoContainer>

            <WalletContainer>
                <WalletImg draggable="false" src={AchievementSrc} alt="Your achievement count" /> {gameData.unlockedAchievements.unlocked.length} / {Object.keys(achievements).length}
            </WalletContainer>

            <AutoContainer>
                <WalletImg draggable="false" src={ClickSrc} alt="Your manual click count" /> {gameData.manualClicksLT}
            </AutoContainer>

            <WalletContainer>
                <WalletImg draggable="false" src={AutoClickSrc} alt="Your auto click count" /> {gameData.autoClicksLT}

            </WalletContainer>

        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.5);
padding: 1rem 1rem 2rem 1rem;
`;

const Title = styled.h1`
width: 90%;
height: 4rem;
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const Img = styled.img`
height: 3rem;
margin: 0 1rem;
user-select: none;
`;

const WalletContainer = styled.div`
width: 90%;
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
width: 600px;
height: ${props => `${props.heightCalc}px`};
bottom: ${props => `-${props.heightCalc}px`};
padding: 0 1rem;
position: absolute;
background-color: rgba(0,0,0,0.7);
color: white;
display: grid;
grid-template-columns: repeat(auto-fill, 150px);
align-items: center;
visibility: hidden;
z-index:999999;
`;

const AutoContainer = styled.div`
width: 90%;
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