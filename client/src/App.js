import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
