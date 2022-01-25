import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AllOffers from "./components/AllOffers.js";
import Statistics from "./components/Statistics";
import StatsPerFlat from "./components/StatsPerFlat";
import Navigation from "./components/Navigation";

import './statistics.css';
import './navigation.css';
import './analyse.css';
import './offer.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path={"/"} exact component={AllOffers}/>
                    <Route path={"/stats"} component={Statistics}/>
                    <Route path={"/stats-per-flat"} component={StatsPerFlat}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
