import { useContext, useEffect, useState } from "react";
import PlayerContext from "./PlayerContext";
import Game from "./Game";
import styled from "styled-components";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

function App() {
  const [width, height] = useWindowSize();
  
  return (
    <Wrapper height={height} width={width}>
      <PlayerContext>
        {width < 768 && 
        "MOBILE"
        }
        
        {width >= 768 && 
        "DESKTOP"
        }
      </PlayerContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
`;

export default App;
