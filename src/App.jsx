import React, { useEffect } from 'react'
import './App.css'
import AuthForm from './components/Auth/AuthForm'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import ResetPassword from './components/Auth/ResetPassword'
import AdminHomePage from './components/Admin/AdminHomePage'
import UserHomePage from './components/User/UserHomePage'
import Products from './components/Admin/Products'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from './store/slices/adminProductSlice'

function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(fetchProductList());
  },[isLoggedIn,dispatch]);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact><AuthForm/></Route>
        <Route path="/reset"><ResetPassword/></Route>
        <Route path="/authpage"><AuthForm/></Route>
        <Route path="/admin"><AdminHomePage/></Route>
        <Route path="/admin/home" exact><AdminHomePage/></Route>
        <Route path="/user/home"><UserHomePage/></Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
