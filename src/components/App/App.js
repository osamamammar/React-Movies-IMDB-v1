import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/:movieId" component={Movie} exact></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
