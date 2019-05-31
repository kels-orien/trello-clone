import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BoardContainer from "./boards/BoardContainer";
import Header from "./Header";
import NotFound from "./NotFound";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
