import React from 'react'
import './App.css'
import AuthForm from './components/Auth/AuthForm'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import ResetPassword from './components/Auth/ResetPassword'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact><AuthForm/></Route>
        <Route path="/reset"><ResetPassword/></Route>
        <Route path="/authpage"><AuthForm/></Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
