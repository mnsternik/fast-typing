import { Route } from "react-router-dom";
import { Fragment } from "react";

import Main from "./components/Main/Main";
import Scoretable from './components/Scoretable/Scoretable';
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact strict active>
        <Main />
      </Route>
      <Route path="/scoretable">
        <Scoretable />
      </Route>
    </>

  );
}

export default App;
