import { Link } from "react-router-dom";
import "../main.css";

function HomeComponent () {
    return (
        <div>
            <h1>Four in a Line Game</h1>
            <p>Please choose an option:</p>
            <p>
                <Link id={"default-button"} to="/game-locally">Play Locally</Link>
            </p>
            <p>
                <Link id={"default-button"} to="game-ai">Play Against Computer</Link>
            </p>
        </div>
    );
};

export default HomeComponent