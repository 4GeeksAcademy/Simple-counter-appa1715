//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function SimpleCounter(props) {
    return <>
        <div className="SecondCounter">
            <div className="Clock"><i class="far fa-clock"></i></div>
            <div className="Days">{props.Days % 10}</div>
            <div className="Hours">{props.Hours % 10}</div>
            <div className="Minutes">{props.Minutes % 10}</div>
            <div className="Seconds">{props.Seconds % 10}</div>
        </div>
    </>
};
SimpleCounter.propTypes = {
    Days: PropTypes.number,
    Hours: PropTypes.number,
    Minutes: PropTypes.number,
    Seconds: PropTypes.number,

}

let counter= 0;
setInterval (function () {
    const Days = Math.floor(counter/1000);
    const Hours = Math.floor(counter/100);
    const Minutes = Math.floor(counter/10);
    const Seconds = Math.floor(counter/1);
    console.log(Days, Hours, Minutes, Seconds);


    counter++;
    ReactDOM.render
    (<SimpleCounter Seconds= {Seconds} Minutes= {Minutes} Hours= {Hours} Days= {Days}/>, 
    document.querySelector("#app"));
},1000);

//render your react application

