import { Affix } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" componen="Auth" />
        <Route path="/home" componen="Home" />
      </Switch>
    </Router>
  );
}

export default App;
