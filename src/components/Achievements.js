import { useContext } from "react";
import styled from "styled-components";
import { playerContext } from "../PlayerContext";
import LockIconSrc from "../img/padlock.png";
import AchievementSrc from "../img/trophy.png";

const Achievements = () => {
  const { achievements, unlockedAchievements } = useContext(playerContext);

  return (
    <Wrapper>
      <Title>🏆 Achievements 🏆</Title>
      <Content>
        {Object.keys(achievements).map(e => {
          if (unlockedAchievements.unlocked.includes(e)) {

            return <AchievementWrapper unlocked={true} key={e}>
              <Icon src={AchievementSrc} alt="Unlocked!" draggable={false} />
              <AchievementData>
                <AchievementTitle>{achievements[e].name}</AchievementTitle>
                <AchievementDesc>{achievements[e].desc}</AchievementDesc>
              </AchievementData>

              <AchievementUnlockDate>
                <p>Unlocked:</p>
                {unlockedAchievements[e]}
              </AchievementUnlockDate>
            </AchievementWrapper>


          } else {


            return <AchievementWrapper unlocked={false} key={e}>
              <Icon src={LockIconSrc} alt="Locked!" draggable={false} />
              <AchievementData>
                <AchievementTitle>{achievements[e].name}</AchievementTitle>
                <AchievementDesc>{achievements[e].desc}</AchievementDesc>
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
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px) {
   height: 50vh;
  }
`;

const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #edf2fa;
border: 5px solid;
@media (max-width: 768px) {
   height: 50vh;
  }
`;

const Title = styled.h1`
width: 100%;
height: 5rem;
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
`;

const AchievementData = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
width: 50%;
`;

const AchievementUnlockDate = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 50%;
`;
const AchievementTitle = styled.h3`
margin-bottom: 0;
text-decoration: underline;
`
const AchievementDesc = styled.p`
font-size: small;
`

const Icon = styled.img`
height: 80%;
margin: 0 1rem;
`;
export default Achievements;