import styled from 'styled-components';


const HeaderBar = styled.div`
top: 0;
border-bottom: 2px solid;
width: 100vw;
height: 4rem;
margin: 0;
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