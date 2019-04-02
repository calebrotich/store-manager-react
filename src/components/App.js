import React, {Component} from'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
    render() {
        return(
        <Router>
            <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
        );
        
    }
}

export default App;
