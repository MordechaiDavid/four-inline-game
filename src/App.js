
import {Route, Router, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import GameComponent from "./components/GameComponent";



function App(){

        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/game-locally" element={<GameComponent gameType={"locally"}/>} />
                    <Route path="/game-ai" element={<GameComponent gameType={"ai"}/>} />

                </Routes>
            </div>
        );

}





export default App;
