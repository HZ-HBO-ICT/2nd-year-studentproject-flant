import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Shoppingcart from "./Components/Products/Shoppingcart";
import Order from "./Components/Products/Order"
import Ordered from "./Components/Products/Ordered";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [initilized, setInitialized] = useState(false);

  if (!initilized) {
    if (localStorage.getItem("token") !== null) {
      axios.defaults.headers.common["Auth-Token"] = localStorage.getItem(
        "token"
      );
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setInitialized(true);
  }  
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  let baseUrl = process.env.REACT_APP_BASEURL;

  const fetchData = async () => {

    //sets userId to the id stored in localstorage
    let userId = localStorage.getItem('userId')

    //get request user -> devices
    let devices = await axios(`${baseUrl}/getUserDevices/${userId}`)
    // saves the data of the devices to devices
    devices = devices.data

    //for loop to iterate over all the devices.
    for (let i = 0; i < devices.length; i++) {
      //get request device -> water
      let measurements = await axios(`${baseUrl}/getDeviceMeasurements/${devices[i].id}`);
      //adding measurement to device object
      devices[i].measurements = measurements.data
    }
    setDevices(devices);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(devices);

  // if (loggedIn) {
  //   function LongPoll() {
  //     axios(`${baseUrl}/getMeasurements`);
  //     console.log("loged");
  //     setTimeout(LongPoll, 5000);
  //   }
  //   LongPoll();
  // }

  if (loading) {
    return (
      <div className="hero is-fullheight has-pattern">
        <div className="columns is-desktop spinnerWrapper">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  }
  


  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/dashboard" loggedIn={loggedIn}>
        {loggedIn ? <Dashboard/> : <Redirect to="/" />}
      </Route>
      <Route path="/basket/:slug">
          <Shoppingcart/>
      </Route>
      <Route path="/order">
          <Order/>
      </Route>
      <Route path="/ordered">
        <Ordered/>
      </Route>
    </Router>
  );
}
