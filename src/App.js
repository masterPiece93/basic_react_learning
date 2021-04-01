import TestComponent1 from './components/TestComponents/TestComponent1/TestComponent1'
import TestComponent2 from './components/TestComponents/TestComponent2/TestComponent2'
import TestComponent3 from './components/TestComponents/TestComponent3/TestComponent3'
import BasicHomePage from './components/BasicImplementations/RoutingWithApiData/BasicHomePage/BasicHomePage'
function App() {

  var showTestComponents = false
  var showImplementationComponents = true
  
  if (showTestComponents) {

    return (
      <div className="App">
          <div id="test-components">
            {/* These are the components made for understanding indivisual React Concepts */}
              
              <TestComponent1 name="test_name"/>
              <TestComponent2 name="test_name"/>
              <TestComponent3 name="test_name"/>
          </div>
      </div>
    );
  }
  else if (showImplementationComponents){

    return (
        <div className="App">
              <div id="basic-implementations"> 
                {/* These are the components made for representing some basic Functionalities
                    that can be aechieved using mixed - react concepts
                */}
                <BasicHomePage/>
              </div>
        </div>
    )
  }
  else{

    return (
      <div>
            <b>nothing to Render</b>
      </div>
    )
  }

}

export default App;
