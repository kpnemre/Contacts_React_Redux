import Contact from "./components/Contacts/Contact";
import Edit from "./components/Edit/Edit"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="container">
    <Router>
    
    
      <Switch>
          <Route exact path="/edit/:id" component={Edit}/>
          <Route exact path="/" component={Contact}/>
  
        </Switch>
   
 
    </Router>
    </div>
  );
}

export default App;
