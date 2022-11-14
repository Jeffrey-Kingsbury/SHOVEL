import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PlayerContext from "./PlayerContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PlayerContext>
        <App />
    </PlayerContext>
);
