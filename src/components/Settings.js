import { useState, useRef, useContext } from "react";
import styled from "styled-components";
import ls from 'localstorage-slim';
import { playerContext } from "../PlayerContext";

const Settings = () => {
    const { gameData } = useContext(playerContext);

    const [exportSavePop, setExportSavePop] = useState(false);
    const [importSavePop, setImportSavePop] = useState(false);
    const importSaveRef = useRef();

    const reset = () => {
        if (window.confirm("Are you sure?\n\nThis will erase all save data. This action cannot be undone.")) {
            if (window.confirm("Last chance to cancel... Are you really sure?")) {
                ls.clear();
                window.location.reload();
            };
        };
    };

    const importSave = (e) => {
        ls.set("import", JSON.parse(e), {encrypt:false});
        if(ls.get("import", {decrypt:true}).wallet >= 0 ){
                ls.set("gameData", JSON.stringify(ls.get("import", {decrypt:true}), {encrypt:true}));
                ls.remove("import");
                window.location.reload();
        }
    }

    return (<Wrapper>
        {!exportSavePop && !importSavePop &&
            <>
                <Button onClick={() => { reset() }}>RESET</Button>
                <Button onClick={() => { ls.set("gameData", gameData, {encrypt: true}); setExportSavePop(true) }}>EXPORT SAVE</Button>
                <Button onClick={() => { setImportSavePop(true) }}>IMPORT SAVE</Button>
            </>
            }
        {exportSavePop &&
        <SaveExportContainer>
            <h3>Copy the code below</h3>
            <p>Warning: This is experimental and may break the game. Use at your own risk.</p>
                <SaveExportTextArea defaultValue={localStorage.getItem("gameData")} />
                <Button onClick={()=>{setExportSavePop(false)}}>Close</Button>
        </SaveExportContainer>
        }
                {importSavePop &&
        <SaveExportContainer>
            <h3>Paste the save file below</h3>
            <p>Warning: This is experimental and may break the game. Use at your own risk.</p>
                <SaveExportTextArea ref={importSaveRef}/>
                <Button onClick={()=>{importSave(importSaveRef.current.value)}}>Save</Button>
                <Button onClick={()=>{setImportSavePop(false)}}>Close</Button>
        </SaveExportContainer>
        }

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

const SaveExportContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

const SaveExportTextArea = styled.textarea`
resize: none;
height: 400px;
width: 90%;
`;


export default Settings;