import React from "react";
import "./main.css"
import WinnerComponent from "./components/WinnerComponent";
import HeaderComponent from "./components/HeaderComponent";



class App extends React.Component{

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
              debugger;
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



    tableRendering = ()=> {
      return(
          <div id={"container"}>
              {
                  this.state.gameTable.map( (row, rowIndex)=>{
                      return(
                          row.map((column, columnIndex)=>{
                              return(
                                  <div onClick={()=> this.cellClicked(rowIndex, columnIndex)}
                                       className={"item item-" + column}></div>
                              )
                          })
                      )

                  })
              }
          </div>
      )
    }


  render(){
      return(
          <div>
              <WinnerComponent gameTable={this.state.gameTable}/>
              <HeaderComponent isRed={this.state.isRed}/>
              {this.tableRendering()}
          </div>
      )
  }


}


export default App;
