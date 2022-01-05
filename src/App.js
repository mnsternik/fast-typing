import Main from "./components/Main/Main";
import { GameContextProvider } from "./store/game-context";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Main />
      </div>
    </GameContextProvider>

  );
}

export default App;
