import { Route } from "react-router-dom";

import { GameContextProvider } from "./store/game-context";

import Main from "./components/Main/Main";
import Scoretable from './components/Scoretable/Scoretable';
import Header from "./components/Header/Header";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Header />
        <Route path="/" exact strict>
          <Main />
        </Route>
        <Route path="/scoretable">
          <Scoretable />
        </Route>
      </div>
    </GameContextProvider>
  );
}

export default App;
