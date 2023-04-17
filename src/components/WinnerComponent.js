import React from "react";
import "../main.css"

function WinnerComponent(props) {
    const checkWinner = ()=>{
        if (checkSequence("red")){
            return ("red")
        }
        if (checkSequence("yellow")){
            return ("yellow")
        }
    }

    const checkSequence = (color)=>{
        const table = props.gameTable;
        // check columns
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j+3 <7 ; j++) {
                if (table[i][j]===color && table[i][j+1]===color && table[i][j+2]===color && table[i][j+3]===color){
                    return true;
                }
            }
        }
        // check rows
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j+3 < 6; j++) {
                if (table[j][i]===color && table[j+1][i]===color && table[j+2][i]===color && table[j+3][i]===color){
                    return true;
                }
            }
        }

        // check diagonals(4 options)
        for (let i = 2; i <=5 ; i++) {
            for (let j = 0, k=i;  j+3<=i && k-3>=0; j++,k--) {
                if (table[k][j]===color && table[k-1][j+1]===color && table[k-2][j+2]===color && table[k-3][j+3]===color){
                    return true;
                }
            }
        }
        for (let i = 1; i <=4 ; i++) {
            for (let j = 5, k=i;  k+3<=6; j--,k++) {
                if (table[j][k]===color && table[j-1][k+1]===color && table[j-2][k+2]===color && table[j-3][k+3]===color){
                    return true;
                }
            }
        }
        for (let i = 2; i <=5 ; i++) {
            for (let j = 6, k=i;  k-3>=0; j--,k--) {
                if (table[k][j]===color && table[k-1][j-1]===color && table[k-2][j-2]===color && table[k-3][j-3]===color){
                    return true;
                }
            }
        }
        for (let i = 5; i >=2 ; i--) {
            for (let j = 5, k=i;  j-3>=0; j--,k--) {
                if (table[j][k]===color && table[j-1][k-1]===color && table[j-2][k-2]===color && table[j-3][k-3]===color){
                    return true;
                }
            }
        }

        return false;
    }


    const winner = checkWinner();
    if (winner!=null){
        return(
            <div className={"winner winner-"+winner}>
                <div>{winner} is the winner!</div>
                <div>
                    <a href="https://four-inline-game.netlify.app/" id="play-again-button">Play Again</a>
                </div>
            </div>
        )
    }

}






export default WinnerComponent;