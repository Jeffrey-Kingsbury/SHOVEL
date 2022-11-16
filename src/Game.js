import { useContext, useState } from "react";
import styled from "styled-components";
import Bg from "./components/Bg";
import ShovelContainer from "./components/ShovelContainer";
import UpgradesShop from "./components/UpgradesShop";
import Achievements from "./components/Achievements";
import Shop from "./components/Shop";
import MobileNav from "./components/MobileNav";
import { playerContext } from "./PlayerContext";
import useInterval from "./use-interval.hook";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import ls from 'localstorage-slim';
import HeaderDesktop from "./components/HeaderDesktop";


const Game = () => {
  const { calculatePerSecond, gameData, setGameData, isMobile } = useContext(playerContext);
  const [activeScreen, setActiveScreen] = useState("shovel"); //shovel, store, upgradesShop, stats, achievements, settings

  useInterval(() => {
    if (gameData.reset) {
      ls.clear();
      window.location.reload();
      return;
    }
    if (calculatePerSecond() > 0) {
      setGameData({ ...gameData, wallet: gameData.wallet + calculatePerSecond(), lifetimeWallet: gameData.lifetimeWallet + calculatePerSecond(), lifetimeAutoWallet: gameData.lifetimeAutoWallet + calculatePerSecond(), autoClicksLT: gameData.autoClicksLT + 1 })
    }
  }, 1000);

  return (
    <Wrapper>
      <Bg />

      {
        !isMobile &&
        <>
          <DesktopView>
            <HeaderDesktop activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            <DesktopInnerWrapper>

              {activeScreen === "shovel" &&
                <>
                  <DesktopLeft>
                    <ShovelContainer />
                  </DesktopLeft>

                  <DesktopRight>
                    <Shop />
                    <UpgradesShop />
                  </DesktopRight>
                </>
              }

              {activeScreen === "stats" &&
                <DesktopStatsWrap>
                  <Stats />
                  <Achievements />
                </DesktopStatsWrap>
              }

              {activeScreen === "settings" &&
                <Settings />
              }
            </DesktopInnerWrapper>
          </DesktopView>
        </>
      }
      {isMobile &&
        <MobileView>
          {activeScreen === "shovel" &&
            <ShovelContainer />
          }

          {activeScreen === "shop" &&
            <Shop />
          }

          {activeScreen === "upgradesShop" &&
            <UpgradesShop />
          }

          {activeScreen === "stats" &&
            <Stats />
          }

          {activeScreen === "achievements" &&
            <Achievements />
          }

          {activeScreen === "settings" &&
            <Settings />
          }

          <MobileNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </MobileView>
      }
    </Wrapper>
  );
};



const Wrapper = styled.div`
  font-family: "Press Start 2P", cursive;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileView = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
overflow: hidden;
`;

const DesktopView = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`;

const DesktopLeft = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`;

const DesktopRight = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`;

const DesktopInnerWrapper = styled.div`
height: 95%;
width: 100%;
display: flex;
`;

const DesktopStatsWrap = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: space-evenly;
background-color: rgba(0,0,0,0.7);
`;
export default Game;
