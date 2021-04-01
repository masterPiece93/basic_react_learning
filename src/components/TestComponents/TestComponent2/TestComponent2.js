// Basic React API binding
// A simple component with `fetch` API call 
import React, {Component} from 'react';

class TestComponent2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            setTimeout(()=>{
                this.setState({
                    items : json,
                    isLoaded: true
                })
            }, 2000)
        })
    }

    render(){
        
        var {isLoaded, items} = this.state

        if (isLoaded) {
            return (
                <ul>
                    {items.map(item=>{
                        return(
                        <li key={item.id}>
                            Name : {item.name} | Email: {item.email}
                        </li>)
                    })}
                </ul>
            )
        } else{
            return (
                <div>Loading....</div>
            )
        }
    }
}

export default TestComponent2