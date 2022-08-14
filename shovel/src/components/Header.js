import styled from 'styled-components';


const HeaderBar = styled.div`
top: 0;
width: 100vw;
height: 4rem;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 2px 10px rgba(0,0,0,.5);
user-select: none;
`;

const Logo = styled.h1`
font-family:"Press Start 2p";
text-align: center;
`;

const Header = ({playerData}) => {
    //const {name, wallet} = playerData;
return(<>
<HeaderBar>
    <Logo>SHOVEL</Logo>
</HeaderBar>
</>);
};

export default Header;