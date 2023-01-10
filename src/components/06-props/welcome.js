import React from 'react'
import "./welcome.scss";
const Welcome = ({firstName, lastName}) => {
/*  const Welcome = (props) => {
  2. bes practice halidir yukardan direk vermek en iyisi :)
  props sayisi az ise en yukardaki parametre seklinde coksa burada belirtmek
  daha iyi props.firstName demekten kacinmak lazim
  const {firstName, lastName} = props; */

  return (
    <div className="welcome">
        <h2>Welcome {firstName} {lastName}</h2>
       {/*  <h2>Welcome {props.firstName} {props.lastName}</h2>  
       yukarda const olarak props u bes practice yapmazsak bu yontem de olur*/}
    </div>
  )

/* Ergin adem beyden :)
import React from "react";
import "./welcome.scss";


 // 1.yontem

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};

*/

/*
    // 2.yontem
const Welcome = (props) => {
    const { firstName, lastName } = props; //destructing
    return (
      <div className="welcome">
        <h2>
          Welcome {firstName} {lastName}
        </h2>
      </div>
    );
  };



// 3.yontem
const Welcome = ({ firstName, lastName }) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Welcome;
*/



}
export default Welcome