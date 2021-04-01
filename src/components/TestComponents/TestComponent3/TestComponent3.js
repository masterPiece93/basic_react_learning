// Basic React Routing
// A simple component with 3 routed components
import React , {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AboutComponent = () => {
    // Anything returning JSX is a component
    return (
        // This is JSX
        <div>
            <p>About Component</p>
        </div>
    )
}

const ShopComponent = () => {
    // Anything returning JSX is a component
    return (
        // This is JSX
        <div>
            <p>Shop Component</p>
        </div>
    )
}

const NavigationComponent = () => {
    // Anything returning JSX is a component
    return (
        // This is JSX
        <nav>
            <h3>
                Logo
            </h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

class TestComponent3 extends Component {
    // Anything returning JSX is a component
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // not required implementation
    }

    render(){
        // This is JSX
        return (
            <div>

                <Router>
                    <NavigationComponent />
                    <Switch>
                        {/* Anything returning JSX is a component */}
                        <Route path="/" exact component={() => (<div> <p> Home Component </p> </div>)}/>                        
                        <Route path="/about" component={AboutComponent}/>
                        <Route path="/shop" component={ShopComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }

    componentWillUnmount(){
        // not required implementation
    }
}

export default TestComponent3;