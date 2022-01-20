import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { GameContextProvider } from "./store/game-context";

function App() {
  return (
    <BrowserRouter>
      <GameContextProvider>
        <div className="App">
          <Main />
        </div>
      </GameContextProvider>
    </BrowserRouter>


  );
}

export default App;
