import React, { useState } from "react";
import { RadialChart } from "react-vis";
import moment from "moment";
import BarGraph from "./BarGraph";

import circleTop from "../../images/circletop.svg";
import graphSvg from "../../images/Graph.svg";

export default function Device({ name, measurements }) {
  //currently only shows the last value in the database
  let current = measurements[0].water;
  console.log(current);
  //converts from ml to l
  let currentLiter = current / 1000;

  //sets goal
  let goal = 15000;
  let currentPercentage = (current / goal) * 100;
  let emptySpace = 100 - currentPercentage;
  let diameter = 2 / (window.innerWidth * window.innerHeight) * 100000000;
  let dOverlay = diameter * 0.85;

  //TODO query for each day
  //TODO query for each week
  //TODO query for each month
  // values for overviews

  const myData = [{ angle: currentPercentage }, { angle: emptySpace }];
  return (
    <div>
      <h1>device name: {name}</h1>
      <div className="wrapper">
        <div className="relative">
          <div className="column">
            <article class="message is-white has-shadow">
              <div class="message-header">
                <p>Tip</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </article>
            <article class="message is-white has-shadow">
              <div class="message-header">
                <p>Tip</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </article>
          </div>
        </div>

        <div className="pie-chart relative">
          <div className="piechart-wrapper">

            <img className="bottom absolute center" src={graphSvg} />
            <img
              className="top padding-top absolute  center"
              src={circleTop}
            />

            <div className="mid absolute center">
              <RadialChart
                colorRange={["#98c9a3", "#b9e5dd"]}
                animation
                data={myData}
                width={diameter}
                height={diameter}
              />
            </div>
            <div className="circleText center">
              <h1 className="top-text title is-size-xl ">{currentLiter} L</h1>
              <div className="top-text subtitle is-size-m subtitle-text">Inname vandaag</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="column">
            <div className="card card-has-graph is-rounded-custom has-shadow">
              <div className="card-content">
                {<BarGraph className="test" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
