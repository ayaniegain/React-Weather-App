// import React, { useState } from "react";

// function Weather({ data, nameOfCity }) {

//     console.log(data)
    
//     // const {weather,main,wind,rain,clouds}=data
//     // let Temp=main.temp
//     // let Weatherupdate=weather.main
//     // let cloudPercentage=(clouds.all);
//     // let humidity=(main.humidity);
//     // let windSpeed=(wind.speed);
//     // let rainval=(rain["1h"]);



//   const [inputval, setInputval] = useState("");

//   const handleClick = () => {
//     nameOfCity(inputval);
//   };

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     setInputval(e.target.value);
//   };

//   return (
//     <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
//       <div className="row d-flex justify-content-center">
//         <div className="row card0">
//           <div className="card1 col-lg-8 col-md-7">
//             {" "}
//             <h3>Weather Data</h3>
//             <div className="text-center">
//               {" "}
//               <img
//                 className="image mt-5"
//                 src="https://i.imgur.com/M8VyA2h.png"
//               />{" "}
//             </div>
//             <div className="row px-3 mt-3 mb-3">
//               {/* <h1 className="large-font mr-3">{Temp}&#176;</h1> */}
//               <div className="d-flex flex-column mr-3">
//                 {/* <h2 className="mt-3 mb-0">{cityName}</h2>{" "} */}
//                 {/* <small>10:36 - Tuesday, 22 Oct '19</small> */}
//               </div>
//               <div className="d-flex flex-column text-center">
//                 {/* <h3 className="fa fa-sun-o mt-4"></h3> <h4>{Weatherupdate}</h4> */}
//               </div>
//             </div>
//           </div>
//           <div className="card2 col-lg-4 col-md-5">
//             <div className="row px-3">
//               {" "}
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Another location"
//                 className="mb-5"
//                 value={inputval}
//                 onChange={handlesubmit}
//               />
//               <div
//                 onClick={handleClick}
//                 className="fa fa-search mb-5 mr-0 text-center"
//               ></div>
//             </div>
//             <div className="mr-5">
//               <p className="light-text suggestion">Birmingham</p>
//               <p className="light-text suggestion">Manchester</p>
//               <p className="light-text suggestion">New York</p>
//               <p className="light-text suggestion">California</p>
//               <div className="line my-5"></div>
//               <p>Weather Details</p>
//               <div className="row px-3">
//                 {/* <p className="light-text">{cloudPercentage}</p> */}
//                 <p className="ml-auto">12%</p>
//               </div>
//               <div className="row px-3">
//                 <p className="light-text">Humidity</p>
//                 <p className="ml-auto">78%</p>
//               </div>
//               <div className="row px-3">
//                 <p className="light-text">Wind</p>
//                 <p className="ml-auto">1km/h</p>
//               </div>
//               <div className="row px-3">
//                 <p className="light-text">Rain</p>
//                 <p className="ml-auto">0mm</p>
//               </div>
//               <div className="line mt-3"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Weather;
