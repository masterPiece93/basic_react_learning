import React , {Component, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ShopComponent = () => {

    useEffect(()=>{
        fetchItems()
    },[]);

    const [items, setItems] = useState([]);

    // service function for fetching items data
    const fetchItems = async () =>{
        const res = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const data = await res.json()
        setItems(data.data)
    }
    return (
        <div>
            <header style={{"text-align": "center",border: "0.5em solid"}}>
                <h1>Shop</h1>
                <p>Your online shop is here</p>
            </header>
            <section style={{display:'flex', flexDirection:'column', "align-items": "center",border: "0.5em solid black"}}>
                {items.map(item => (
                    <h1 key={item.itemId}>
                        <Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
                    </h1>
                ))}
            </section>
            <hr/>
            <footer style={{display:'flex', flexDirection:'row', "justify-content": "space-evenly",border: "0.5em solid black"}}>
                <b>
                    ANKIT KUMAR
                </b>
                <b>
                    ankit8290@gmail.com
                </b>
                <b>
                    9910504776
                </b>
            </footer>

        </div>
    )
}

const AboutComponent = () => {
    return (
        <div>
            <header style={{"text-align": "center",border: "0.5em solid"}}>
                <h1>About Us</h1>
            </header>
            <section style={{display:'flex', flexDirection:'column', "align-items": "center",border: "0.5em solid black"}}>
                <p>..Ye hamara component hai</p>
                <p>..ye hamara code hai</p>
                <p>!! aur ye hamari learning howriii haii !!</p>
            </section>
            <footer style={{display:'flex', flexDirection:'row', "justify-content": "space-evenly",border: "0.5em solid black"}}>
                <b>
                    ANKIT KUMAR
                </b>
                <b>
                    ankit8290@gmail.com
                </b>
                <b>
                    9910504776
                </b>
            </footer>

        </div>
    )
}

// This is kind of a resusable component , it's responsibility is to formulate an Item ,
// with the required details in an HTML .
const ItemComponent = () => {
    
    const getItem = () =>{
        const item = fetch('https://fortnite-api.theapinetwork.com/item/get?id=2fad344-834e456-dcf643d-91f9712')
    }

    return (
        // This is JSX
        <div>
            
        </div>    
    )
}

const NavComponent = () => {

    return (
        // This is JSX
        <nav style={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
            <h3 style={{flex: 1}}>
                Logo
            </h3>
            <ul style={{display: "flex",flexDirection: "row",flex: 2, justifyContent: "space-around" }}>
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

class BasicHomePage extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <header style={{background: "grey"}}>
                    <hr/>
                        <h2 style={{"text-align": "center", background: "whitesmoke"}}>Landing Page</h2>
                    <hr/>
                </header>
                
                <Router>
                    <NavComponent />
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

    }
}

export default BasicHomePage