import React, {useEffect} from "react";

import "../main.css"


function HeaderComponent(props){


    return(
        <div id="player-turn">
            <div className="player-circle player-red"></div>
            <div>
                <div className="play-text">Play!</div>
                <div className={"arrow arrow-"+(props.isRed? "red": "yellow")}></div>
            </div>
            <div className="player-circle player-yellow"></div>
        </div>
    )
}

export default HeaderComponent;