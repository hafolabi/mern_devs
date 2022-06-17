import React, { useContext } from 'react'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { Context } from './components/context/Context'
import Footer from './components/footer/Footer'
import EmailVerify from './components/EmailVerify/EmailVerify'
import PassReset from './components/passReset/PassReset'
import PageNotFound from './PageNotFound'

export default function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>

        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/register">
            {user ? <Home /> : <Register />}
        </Route>

        <Route exact path="/login">
        {user ? <Home /> : <Login />}
        </Route>

        <Route exact path="/write">
        {user ? <Write /> : <Register />}
        </Route>

        <Route exact path="/settings/:userId">
        {user ? <Settings /> : <Login />}
        </Route>

        <Route exact path="/about">
            <Home />
        </Route>

        <Route exact path="/contact">
            <Home />
        </Route>

        <Route exact path="/post/:postId">
            <Single />
        </Route>

        <Route exact path='/users/:id/verify/:token'>
            {user ?   <Home /> : <EmailVerify />}
        </Route>

        <Route exact path='/users/:id/passreset/:token'>
            {user ?   <Home /> : <PassReset />}
        </Route>
        
        <Route exact path='*'>
          <PageNotFound />
        </Route>

        {/* <Route exact path='/:pageName/'>
          <PageNotFound />
        </Route> */}

      </Switch>
      <Footer />
    </Router>
  )
}
