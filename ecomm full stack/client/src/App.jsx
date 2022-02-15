import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/success";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router,  Redirect, Switch, Route, } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <div>
    <Router>
      <ToastContainer />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register}/>
      <Route exact path='/success' component={Success}/>

      <Route exact path='/Login'> 
          {user ? <Redirect to="/" /> : <Login />} 
      </Route>

      <Route exact path='/Product/:id' component={Product} />
      <Route exact path='/Products/:category' component={ProductList} />
      <Route exact path='/cart' component={Cart} />
      
      <Route exact path='/:pageName' component={PageNotFound} />
      </Switch>
    </Router>

    </div>
   )
};


export default App;