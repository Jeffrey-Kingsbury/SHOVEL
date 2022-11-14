import { useContext } from "react";
import { playerContext } from "./PlayerContext";

import Game from "./Game";
import styled from "styled-components";

function App() {
  const { width, height } = useContext(playerContext);

  return (
    <Wrapper height={height} width={width}>
        <Game />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
`;

export default App;
