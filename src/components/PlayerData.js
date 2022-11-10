import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import WalletSrc from "../img/wallet.png";
import AutomationSrc from "../img/shovel.png";
import LockIconSrc from "../img/padlock.png";
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
            <DataContainerLeft>
                <WalletContainer>
                    <WalletImg draggable="false" src={WalletSrc} alt="Your wallet" /> {wallet > 99999 ? wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : wallet}$
                </WalletContainer>
                <AutoContainer>
                    <WalletImg draggable="false" src={AutomationSrc} alt="Your current automation" /> {calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.
                    <HiresContainer>
                        {
                            Object.entries(hires[0]).map(e => {
                                const id = e[1];
                                return <HiresWrapper key={e[0]}><Hires locked={id.lock(playerData, purchases)} src={!id.lock(playerData, purchases) ? id.img : LockIconSrc} />X{getOwned(e[0]).owned}</HiresWrapper>

                            })}
                    </HiresContainer>
                </AutoContainer>
            </DataContainerLeft>
            <button onClick={()=>{localStorage.clear(); window.location.reload();}}>reset</button>
            <button onClick={()=>{localStorage.clear(); ls.set("!@$fd!#@%", 100000000000, {encrypt:true});window.location.reload();}}>reset with money</button>

        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 150px;
display: flex;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
@media (max-width: 768px) {
    height: 20vh;
  }
`;

const DataContainerLeft = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: column;
`;

const WalletContainer = styled.div`
height: 50%;
display: flex;
align-items: center;
user-select: none;
font-size: larger;
position: relative;
`;

const HiresContainer = styled.div`
width: 100%;
height: auto;
position: absolute;
background-color: rgba(0,0,0,0.5);
padding: 1rem;
color: white;
bottom: -150px;
display: grid;
grid-template-columns: repeat(auto-fill, 100px);
align-items: center;
z-index: 9999999;
visibility: hidden;
`;

const AutoContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
user-select: none;
font-size: larger;
position: relative;
cursor: pointer;
&:hover ${HiresContainer}{
    visibility: visible;
}
`;

const WalletImg = styled.img`
height: 90%;
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