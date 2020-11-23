const author = "MsM Robin";
var desc = "N/A";
const date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();


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

export default Card; //To give access for every file in this app 