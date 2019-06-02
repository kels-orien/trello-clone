import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BoardContainer from "./boards/BoardContainer";
import Header from "./Header";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Container from "./Container";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={BoardContainer} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
