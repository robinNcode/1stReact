import React from 'react';
import Card from './components/Card';

//CSS assining into a variable
const headingStyle = {
  color : "white",
  backgroundColor : "purple",
  fontSize : "3rem",
  textAlign : "center"
};

function App(){
    return <div style={{padding : "80px;"}}>
                <h1 style={headingStyle}>First React App</h1>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
}

export default App;