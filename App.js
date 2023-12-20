import Add from './Add';
import Dashboard from './Dashboard';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Route ,Link, Switch} from "react-router-dom"
import Home from './Home';
import Update from './Update';

function App() {
  return (
    <>
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#333', color: 'white' }}>   
    <Link to="/Home">Home</Link> | {"  "}
    <Link to="/Add">Create New Customer</Link> | {"  "}
    <Link to="/Dashboard">All Customer Details</Link> | {"  "}
    
 </div>
 <div style={{backgroundColor:"lightblue"}}>
 <Switch>
    <Route exact path="/"
                 component={Home} />
    <Route exact path="/Home"
                 component={Home} />
    <Route exact path="/Add"
                 component={Add} />
    <Route exact path="/Dashboard"
                 component={Dashboard} />
    <Route exact path="/update/:id"
                 component={Update} />
  
 </Switch>
 </div>
 </>
  
  );
}

export default App;
