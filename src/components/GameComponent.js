import React from "react";
import "../main.css"
import WinnerComponent from "./WinnerComponent";
import HeaderComponent from "./HeaderComponent";
import LocallyRendering from "./LocallyRendering";
import AIRendering from "./AIRendering"
import {Route, Router, Routes} from "react-router-dom";
import HomeComponent from "./HomeComponent";




class GameComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            gameTable: [
                ["white","white","white","white","white","white","white"],
                ["white","white","white","white","white","white","white"],
                ["white","white","white","white","white","white","white"],
                ["white","white","white","white","white","white","white"],
                ["white","white","white","white","white","white","white"],
                ["white","white","white","white","white","white","white"]
            ],
            isRed:true
        }
    }


    cellChanged = (allowed, rowIndex, columnIndex)=> {
        if (allowed) {
            for (let i = 5; i >= 0; i--) {
                if (this.state.gameTable[i][columnIndex] === "white") {
                    if (this.state.isRed === true) {
                        let updateTable = this.state.gameTable;
                        updateTable[i][columnIndex] = "red";
                        this.setState(
                            {
                                gameTable: updateTable,
                                isRed: false
                            }
                        )
                        break;
                    }
                    if (this.state.isRed === false) {
                        let updateTable = this.state.gameTable;
                        updateTable[i][columnIndex] = "yellow";
                        this.setState(
                            {
                                gameTable: updateTable,
                                isRed: true
                            }
                        )
                        break;
                    }

                }

            }
        }
    }



    componentWillUnmount() {
        window.location.reload();
    }

    render() {
        return(
            <div>
                {this.props.gameType === "locally" && (
                <div>
                <HeaderComponent isRed={this.state.isRed}/>
                <WinnerComponent gameTable={this.state.gameTable}/>
                 <LocallyRendering
                 gameTable={this.state.gameTable}
                cellChanged={this.cellChanged}/>
                </div>
                )}
                {this.props.gameType === "ai" &&(
                    <div>
                        <HeaderComponent isRed={this.state.isRed}/>
                        <WinnerComponent gameTable={this.state.gameTable}/>
                        <AIRendering gameTable={this.state.gameTable}
                                     cellChanged={this.cellChanged}/>

                    </div>
                )}
            </div>
        )
    }

}





export default GameComponent;
