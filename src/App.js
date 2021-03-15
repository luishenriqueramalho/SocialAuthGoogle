import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screen
import Logintbygoogle from "./Logintbygoogle";
import Dashboard from "./Dashboard";

function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Logintbygoogle}></Route>
                            <Route path="/Dashboard" component={Dashboard}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );
}

export default App;
