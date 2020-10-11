import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Typical from 'react-typical'
import Cards from './components/Card/Cards'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <div className="container">
           <p>
           <Typical
          loop={1}
          wrapper="b"
          steps={[
            1000, 'INDULGE.', 1000
          ]}
        />
        </p>
        <img src="background.png" align="left" width="170" height="330" ></img>
        <p>
           <Typical
          loop={1}
          wrapper="b"
          steps={[
           2000, 'ENGAGE.', 1000
          ]}
        />
        </p>
        <div className="icon">
           <i class="fab fa-app-store-ios"></i>
           <i class="fab fa-google-play"></i>
        </div>
        </div>
      </div>
      <div className="footer">
      <Router> 
        <Cards />
        <Footer />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
      </div>
      
    </div>
    
    
  );
}

export default App;
