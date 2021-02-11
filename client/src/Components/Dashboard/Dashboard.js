import React, { useState, useEffect } from "react";
import Device from "./Device";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Dashboard({ loggedIn }) {
  let baseUrl = process.env.REACT_APP_BASEURL;
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    //sets userId to the id stored in localstorage
    let userId = localStorage.getItem("userId");

    //get request user -> devices
    let devices = await axios(`${baseUrl}/getUserDevices/${userId}`);
    // saves the data of the devices to devices
    devices = devices.data;

    //for loop to iterate over all the devices.
    for (let i = 0; i < devices.length; i++) {
      //get request device -> water
      let measurements = await axios(
        `${baseUrl}/getDeviceMeasurements/${devices[i].id}`
      );
      //adding measurement to device object
      devices[i].measurements = measurements.data;
    }
    setDevices(devices);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loggedIn) {
    function LongPoll() {
      axios(`${baseUrl}/getMeasurements`);
      setTimeout(LongPoll, 5000);
    }
    LongPoll();
  }


  return (
    <div>
      {loading ? (
        <div className="hero is-fullheight has-pattern">
          <div className="columns is-desktop spinnerWrapper">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        </div>
      ) : (
        devices.map((device) => (
          <Device
            key={device.id}
            name={device.name}
            measurements={device.measurements}
          />
        ))
      )}
    </div>
  );
}
