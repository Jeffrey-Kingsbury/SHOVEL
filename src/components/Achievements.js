import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import LockIconSrc from "../img/padlock.png";
import AchievementSrc from "../img/trophy.png";

const Achievements = () => {
  const { achievements, gameData } = useContext(playerContext);

  return (
    <Wrapper>
      <Title>Achievements</Title>
      <Content>
        {Object.keys(achievements).map(e => {
          if (gameData.unlockedAchievements.unlocked.includes(e)) {

            return <AchievementWrapper unlocked={true} key={e}>
              <Icon src={AchievementSrc} alt="Unlocked!" draggable={false} />
              <AchievementData>
                <AchievementTitle>{achievements[e].name}</AchievementTitle>
                <AchievementDesc>{achievements[e].desc}</AchievementDesc>
              </AchievementData>

              <AchievementUnlockDate>
                <p>Unlocked:</p>
                {gameData.unlockedAchievements[e]}
              </AchievementUnlockDate>
            </AchievementWrapper>


          } else {


            return <AchievementWrapper unlocked={false} key={e}>
              <Icon src={LockIconSrc} alt="Locked!" draggable={false} />
              <AchievementData>
                <AchievementTitle>{achievements[e].name}</AchievementTitle>
                <AchievementDesc>{achievements[e].hidden ? "Shh... It's a secret to everybody. Keep playing to unlock." : achievements[e].desc}</AchievementDesc>
              </AchievementData>

              <AchievementUnlockDate>
                Locked!
              </AchievementUnlockDate>
            </AchievementWrapper>

          }
        })}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #edf2fa;
border: 5px solid;
overflow-y: scroll;
overflow-x: hidden;
@media (max-width: 768px) {
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
`;

const Title = styled.h1`
width: 90%;
height: 5%;
padding: 5px 0;
background-color: #edf2fa;
border: 5px solid;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const AchievementWrapper = styled.div`
width: 100%;
height: 6rem;
display: flex;
align-items: center;
background-color: ${props => props.unlocked ? "beige" : "lightgray"};
transition: all .2s ease-in-out;
&:hover{
  box-shadow:  0 2px 5px 0px rgba(0, 0, 0, 0.5);
  z-index: 9;
  transform: scale(1.03);
}
`;

const AchievementData = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
width: 100%;
`;

const AchievementUnlockDate = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 40%;
`;
const AchievementTitle = styled.h3`
margin-bottom: 0;
text-decoration: underline;
`
const AchievementDesc = styled.p`
font-size: small;
`

const Icon = styled.img`
height: 40%;
margin: 0 1rem;
`;
export default Achievements;