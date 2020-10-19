import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './components/HomePage/Index';
import Login from './components/LogIn/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddService from './components/DashBoard/AddService/AddService';
import Order from './components/DashBoard/Order/Order';
import ServicesList from './components/DashBoard/Order/ServicesList/ServicesList';
import Reviews from './components/DashBoard/Order/Reviews/Reviews';
import AllServiceList from './components/DashBoard/AllServiceList/AllServiceList';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState([{}]);

  return (
    <UserContext.Provider value={{ allLogin: [loggedInUser, setLoggedInUser] }}>
      <Router >
        <Switch>
          <PrivateRoute exact path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute exact path="/allServiceList">
            <AllServiceList />
          </PrivateRoute>
          <PrivateRoute exact path="/addReview">
            <Reviews />
          </PrivateRoute>
          <PrivateRoute exact path="/serviceList">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute exact path="/addOrder">
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path="/addservice">
            <AddService />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
