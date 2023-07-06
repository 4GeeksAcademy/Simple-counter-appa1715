//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function SimpleCounter(props) {
    return <>
        <div className="SecondCounter">
            <div className="Clock"><i class="far fa-clock"></i></div>
            <div className="Days">{props.Days}</div>
            <div className="Hours">{props.Hours}</div>
            <div className="Minutes">{props.Minutes}</div>
            <div className="Seconds">{props.Seconds}</div>
            <div className="Miliseconds">{props.Miliseconds}</div>
        </div>
    </>
};

let counter= 0;
setInterval (function () {
    ReactDOM.render
    (<SimpleCounter/>, 
    document.querySelector("#app"));
},1000);

//render your react application

