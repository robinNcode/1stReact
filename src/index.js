import React from 'react';
import ReactDOM from 'react-dom';

const author = "MsM Robin";
var desc = "N/A";
const date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

const headingStyle = {
  color : "white",
  backgroundColor : "purple",
  fontSize : "3rem",
  textAlign : "center"
};

/**
 * Creating a react component
 */
function Card(){
  return <div className="card">
          <h5 className="cardName">@ Author : {author}</h5>
          <h5 className="cardDec">@ Description : {desc}</h5>
          <h5 className="cardFoot">@ Date : {day + "-" + month + "-" + year}</h5>
        </div>
}

ReactDOM.render(
  <div style={{padding : "80px;" }}>
    <h1 style={headingStyle}>First React App</h1>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById('root')
);

