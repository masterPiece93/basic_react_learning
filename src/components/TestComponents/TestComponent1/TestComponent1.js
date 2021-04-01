// Basic React Understanding :
// A Simple component with props
import React from 'react';

// This is just a dummy test component
const TestComponent1 = (props) => {
    var _name = props.name
    return (
            <p> This is test component with props :- name : {_name} </p>
    )
}

export default TestComponent1