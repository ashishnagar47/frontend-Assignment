import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Pricing from './screens/Pricing'
import Feature from './screens/Features'
import Usecases from './screens/UseCases'
import Products from './screens/Products'
import Navbar from './screens/Navbar'
import Home from './screens/Home'
 

function App() {
  
  return (
    <BrowserRouter>
      {/* <nav className="Navbar">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">MAXEON</label>
        <ul className="Nav-list">
          <li><Route></Route><Link className="active" to="/Products" >Products</Link></li>
          <li><Link to="/Feature">Features</Link></li>
          <li><Link to="/Cases">Use Cases</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
        </ul>
      </nav> */}

      <Navbar></Navbar>

      <Switch>
      <Route exact path='/' component={Home}>
      </Route>

      <Route exact path="/Products" component={Products}>
      </Route>

      <Route exact path="/Feature" component={Feature}>
      </Route>

      <Route exact path="/Cases" component={Usecases}>
      </Route>

      <Route exact path="/Pricing" component={Pricing}>
      </Route>

    </Switch>
      
        {/* <section className="sideText">
          Where words fails, Music Speaks
        </section>
        <Chat></Chat>
      <div>
      </div> */}
    </ BrowserRouter>
  );
}

export default App;
