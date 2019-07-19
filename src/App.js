import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/header";
import PostList from "./components/postList";
import PostView from "../src/components/postView";

const App = () => (
  <Router>
    <div>
      <Header />
      <section className="section container content">
        <Route exact path="/" component={PostList} />
        <Route path="/:slug" component={PostView} />
      </section>
    </div>
  </Router>
);

//ReactDOM.render(<App />, document.getElementById("app"));
export default App;