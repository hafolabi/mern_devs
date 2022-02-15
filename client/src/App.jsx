import React from 'react'
import Home from './Home'
import About from './About'
import Faq from './Faq'
import Team from './Team'
import Addtoarray from './usestate'
import Contact from './Contact'
import Addtoarr from './addtoarr'
import Addtoapi from './addtoapi'
import Api from './Api' 
import User from './User' 
import Cinema from './Cinema' 
import Apii from './Apii'
import Login from './login'
import Register from './Register'
import Pricing from './Pricing'
import Testimonial from './Testimonial'
import { BrowserRouter as Router,  Route,  } from 'react-router-dom';


import './App.css';

class App extends React.Component{

  render(){
    
    return(
      
      <div>
        <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Pricing' component={Pricing} />
        <Route exact path='/Api' component={Api} />
        <Route exact path='/Apii' component={Apii} />
        <Route exact path='/Faq' component={Faq} />
        <Route exact path='/Team' component={Team} />
        <Route exact path='/User' component={User} />
        <Route exact path='/Cinema' component={Cinema} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Addtoarr' component={Addtoarr} />
        <Route exact path='/Addtoapi' component={Addtoapi} />
        <Route exact path='/Addtoarray' component={Addtoarray} />
        <Route exact path='/Testimonial' component={Testimonial} />
        <Route exact path='/Contact' component={Contact} />
        </Router>

      </div>
      
    )
  }
}


export default App;
