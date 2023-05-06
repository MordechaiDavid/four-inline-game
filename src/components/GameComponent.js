import React from "react";
import "../main.css"
import WinnerComponent from "./WinnerComponent";
import HeaderComponent from "./HeaderComponent";
import TableComponent from "./tableComponent";
import {Route, Router, Routes} from "react-router-dom";
import HomeComponent from "./HomeComponent";



class GameComponent extends React.Component{

    state = {
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

    cellClicked = (rowIndex, columnIndex)=> {
        for (let i = 5; i >= 0; i--) {
            if (this.state.gameTable[i][columnIndex] === "white") {
                if (this.state.isRed===true) {
                    let updateTable = this.state.gameTable;
                    updateTable[i][columnIndex] = "red";
                    this.setState(
                        {
                            gameTable:updateTable,
                            isRed:false
                        }
                    )
                    break;
                } if (this.state.isRed === false) {
                    let updateTable = this.state.gameTable;
                    updateTable[i][columnIndex] = "yellow";
                    this.setState(
                        {
                            gameTable:updateTable,
                            isRed:true
                        }
                    )
                    break;
                }

            }

        }
    }

    componentWillUnmount() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <HeaderComponent isRed={this.state.isRed} />
                <WinnerComponent gameTable={this.state.gameTable} />
                <TableComponent
                    gameTable={this.state.gameTable}
                    cellClicked={this.cellClicked}/>
            </div>
        );
    }


}





export default GameComponent;
