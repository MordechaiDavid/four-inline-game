import React from "react";

class AIRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn:"user",
            buttonDisabled:false
        }
    }


    componentDidUpdate() {
         if (this.state.turn === "AI") {
            setTimeout(() => {
                this.setState({
                    turn:"user",
                    buttonDisabled:false
                });
                this.props.cellChanged(true, 4,4)
            }, 4000);
        }
    }

    clicked = (rowIndex, columnIndex)=> {
        this.props.cellChanged(this.state.turn === "user", rowIndex, columnIndex)
        this.setState( {turn:"AI", buttonDisabled: true})
    }



    tableRendering = ()=> {
        return(
            <div id={"container"}>
                {
                    this.props.gameTable.map((row, rowIndex) => {
                        return (
                            row.map((column, columnIndex) => {
                                return (
                                    <input type={"button"} onClick={()=> this.clicked(rowIndex, columnIndex)}
                                         disabled={this.state.buttonDisabled}
                                         className={"item item-" + column}></input>
                                )
                            })
                        )

                    })
                }
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.tableRendering()}
            </div>
        )
    }
}

export default AIRendering;
