import { useContext } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { playerContext } from "../PlayerContext";
import LockIconSrc from "../img/padlock.png";

const ShopItem = ({
  name,
  tippy,
  price,
  produce,
  img,
  owned,
  locked = true,
  id,
}) => {
  const { purchaseHelp } = useContext(playerContext);

  return (
    <TippyWithStyle
      content={locked ? "Keep going to unlock!" : tippy}
      placement="left"
    >
      <Wrapper
        locked={locked}
        onClick={() => {
          if (!locked) purchaseHelp(id);
        }}
      >
        <IconContainer locked={locked}>
          <Icon
            src={img}
            alt={`Purchase a ${name}`}
            draggable={false}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </IconContainer>
        {locked && <LockIcon src={LockIconSrc} alt="locked" />}
        <DataContainer locked={locked}>
          <Name>{name}</Name>
          <Price>
            Price:{" "}
            {price > 99999
              ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : price}
            $
          </Price>
          <Produce>
            Produces:{" "}
            {produce > 99999
              ? produce.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : produce}
            $/second
          </Produce>
          <Owned>Owned: {owned}</Owned>
          <hr style={{ width: "100%" }} />
          <Desc>{tippy}</Desc>
        </DataContainer>
      </Wrapper>
    </TippyWithStyle>
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  min-height: 9rem;
  background-color: ${(props) => (props.locked ? "gray" : "#646f77")};
  margin: 30px 0 0 0;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);
  color: #e1e4e8;

  @media (max-width: 768px) {
    width: 95%;
    font-size: x-small;
    contain: content;
    padding: 0.25rem 0;
  }

  cursor: pointer;
  transition: all ease-in-out 0.08s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
  }
`;

const IconContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.locked ? "none" : "flex")};
  margin-right: 1rem;

  @media (min-width: 769px) {
    contain: content;
  }
`;

const Icon = styled.img`
  height: 110%;
  @media (max-width: 768px) {
    width: 35%;
    height: auto;
    z-index: -1;
    opacity: 70%;
    position: absolute;
  }
`;

const LockIcon = styled.img`
  height: 80%;
  margin: auto;
  @media (max-width: 768px) {
    height: 5rem;
    margin: 5px auto;
  }
`;

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.locked ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 0 1rem;
`;

const Name = styled.h2`
  text-align: left;
  margin: 0;
  font-size: medium;
`;

const Price = styled.p`
  text-align: left;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    margin-top: 2px;
    font-size: small;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Produce = styled.p`
  text-align: left;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    margin-top: 2px;
    font-size: small;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Owned = styled.p`
  width: 100%;
  text-align: left;
  margin: 0;
  font-size: small;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Desc = styled.p`
  width: 100%;
  text-align: left;
  margin: 0;
  font-size: small;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
`;

export default ShopItem;
