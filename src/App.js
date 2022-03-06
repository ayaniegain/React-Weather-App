import React, { useEffect, useState } from "react";

import logo from './spinner.gif'
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, SetError] = useState("")

  let API = "895284fb2d2c50a520ea537456963d9c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`;







  function Apicall() {
    axios.get(url).then((response) => {
      if (response) {

          setData(response.data);
          SetError(false)

      }

    })
      .catch(function (error) {
        // handle error
        setTimeout(() => {
          
          // SetError(true)
        }, 2000);
        console.log(error);
      })
  }

  const searchLocation = (event) => {
    Apicall();
    if (event.key === "Enter") {
      Apicall();

      setLocation("");
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  console.log(data);

  return (
    < >
      {loading ? (<section className="loading"> <img src={logo} alt="spinner" />
      </section>) : (
        <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
          {" "}
          <div className="row d-flex justify-content-center">
            {" "}
            <div className="row card0">
              {" "}
              <div className="card1 col-lg-8 col-md-7">
                {" "}
                <h3>Weather Data</h3>{" "}
                <div className="text-center">
                  {" "}
                  <img
                    className="image mt-5"
                    src="https://i.imgur.com/M8VyA2h.png"
                  />{" "}
                </div>{" "}
                <div className="row px-3 mt-3 mb-3">
                  {" "}
                  <div className="large-font mr-3">
                    {" "}
                    {data.main ? (
                      <h1>{Math.floor(data.main.temp.toFixed() - 273.15)}°C</h1>
                    ) : null}{" "}
                  </div>{" "}
                  <div className="d-flex flex-column mr-3">
                    {" "}
                    {data ? (
                      <h2 className="mt-3 mb-0">{data.name}</h2>
                    ) : (
                      <h2> "enter the city"</h2>
                    )}{" "}
                    <small>{dateBuilder(new Date())}</small>{" "}
                  </div>{" "}
                  <div className="d-flex flex-column text-center">
                    {" "}
                    {/* <h3 className="fa fa-sun-o mt-4"></h3> <h4>{Weatherupdate}</h4> */}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="card2 col-lg-4 col-md-5">
                {error ? (
                  <h4 className="mt-3 mb-0">invalid location</h4>
                ) : (
                  <h4></h4>
                )}{" "}
                <div className="row px-3">
                  {" "}
                  <input
                    type="text"
                    name="location"
                    placeholder="Another location"
                    className="mb-5"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                  />
                  <>

                  </>
                  <div
                    onClick={() => searchLocation("press")}
                    className="fa fa-search mb-5 mr-0 text-center"
                  ></div>
                </div>{" "}


                <div className="mr-5">
                  {" "}
                  <p className="light-text suggestion">Birmingham</p>{" "}
                  <p className="light-text suggestion">Manchester</p>{" "}
                  <p className="light-text suggestion">New York</p>{" "}
                  <p className="light-text suggestion">California</p>{" "}
                  <div className="line my-5"></div> <p>Weather Details</p>{" "}
                  <div className="row px-3">
                    {" "}
                    <p className="light-text">Clouds</p>{" "}
                    {data.clouds ? (
                      <p className="ml-auto">{data.clouds.all}%</p>
                    ) : null}{" "}
                  </div>{" "}
                  <div className="row px-3">
                    {" "}
                    <p className="light-text">Humidity</p>{" "}
                    {data.main ? (
                      <p className="ml-auto">{data.main.humidity}%</p>
                    ) : null}{" "}
                  </div>{" "}
                  <div className="row px-3">
                    {" "}
                    <p className="light-text">Wind</p>{" "}
                    {data.wind ? (
                      <p className="ml-auto">{data.wind.speed.toFixed()} MPH</p>
                    ) : null}{" "}
                  </div>{" "}
                  <div className="row px-3">
                    {" "}
                    <p className="light-text">Rain</p>{" "}
                    <p className="ml-auto">0mm</p>{" "}
                    {data.rain ? (
                      <p className="ml-auto">{data.rain["1h"]} %</p>
                    ) : null}{" "}
                  </div>{" "}
                  <div className="line mt-3"></div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default App;
