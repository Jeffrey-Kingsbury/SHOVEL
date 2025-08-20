import styled from "styled-components";
import { useMemo } from "react";

const REPEATING_WORD = "SHOVEL";
const REPETITIONS = 500;

const Bg = () => {
  const backgroundText = useMemo(
    () => REPEATING_WORD.repeat(REPETITIONS),
    []
  );

  return <Wrapper>{backgroundText}</Wrapper>;
};

const Wrapper = styled.div`
width: 110vw;
height: 100vh;
position: absolute;
z-index: -10000;
font-size: 100px;
color: lightgray;
overflow: hidden;
word-break: break-all;
line-height: 1;
user-select: none;
`;

export default Bg;