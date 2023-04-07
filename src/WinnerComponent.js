
function WinnerComponent(props){
    if (props.colorWin!=null) {
        return (
            <div>
                {props.colorWin + " is the winner"}
            </div>
        )
    }
}

export default WinnerComponent;