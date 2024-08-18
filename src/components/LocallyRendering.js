import React from "react";

function LocallyRendering(props){

    const tableRendering = ()=> {
        return(
            <div id={"container"}>
                {
                    props.gameTable.map( (row, rowIndex)=>{
                        return(
                            row.map((column, columnIndex)=>{
                                return(
                                    <div onClick={()=> props.cellChanged(true, rowIndex, columnIndex)}
                                         className={"item item-" + column}></div>
                                )
                            })
                        )

                    })
                }
            </div>
        )
    }


    return(
        <div>
            {tableRendering()}
        </div>
    )
}

export default LocallyRendering;