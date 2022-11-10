import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";

const PlayerData = () => {
    const { wallet, calculatePerSecond } = useContext(playerContext);

    return (
        <Wrapper>
            Wallet: {wallet > 99999 ? wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : wallet}$
            <br></br>
            <br></br>
            "Automation": {calculatePerSecond() > 99999 ? calculatePerSecond().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : calculatePerSecond()}$/sec.
            <br></br>
            <br></br>
            <button onClick={()=>{localStorage.clear(); window.location.reload();}}>reset</button>
            <button onClick={()=>{localStorage.clear(); localStorage.setItem("wallet", 100000000000);window.location.reload();}}>reset with money</button>
           
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 30%;
display: flex;
align-items: center;
justify-content: center;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
@media (max-width: 768px) {
    height: 20vh;
  }
`;

export default PlayerData;