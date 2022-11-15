import styled from "styled-components";
import ls from 'localstorage-slim';

const Settings = () => {

    const reset = () => {
        if(window.confirm("Are you sure?\n\nThis will erase all save data. This action cannot be undone.")){
            if(window.confirm("Last chance to cancel... Are you really sure?")){
                ls.clear();
                window.location.reload();
            }
        }
    }

    return (<Wrapper>
        <Button onClick={()=>{reset()}}>RESET</Button>
        <Button>EXPORT SAVE</Button>
        <Button>IMPORT SAVE</Button>
    </Wrapper>);
};

const Wrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Button = styled.button`
width: 80%;
height: 4rem;
margin: 1rem 0;
font-family: 'press start 2p';
border: 2px solid;
color: #000;
box-shadow: 0 5px 5px rgba(0,0,0,0.5);
user-select: none;
@media (hover: hover) {
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 5px 8px 5px rgba(0, 0, 0, .2);
    }
}
    &:active{
        transform: scale(.95);
        box-shadow: 0 0 1px 5px rgba(0, 0, 0, .2);
    }
`;

export default Settings;