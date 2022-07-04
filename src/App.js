import { Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Tips from "./components/Tips/Tips";
import Scoretable from './components/Scoretable/Scoretable';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Route path="/" exact strict active>
        <Main />
      </Route>
      <Route path="/scoretable">
        <Scoretable />
      </Route>
      <Route path="/tips">
        <Tips />
      </Route>
      <Footer />
    </>

  );
}

export default App;
