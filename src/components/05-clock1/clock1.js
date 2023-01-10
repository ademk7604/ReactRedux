import moment from 'moment/moment'
import React from 'react'
import "./clock1.scss"
const Clock1 = () => {

    const dateTime =moment();
    //require('moment/locale/tr');
    /* bu sekilde yerel saat dilimide eklenebiliyor */

   
  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  let message = "";


    if (hour >= 6 && hour < 11) {
        message = "Morning";
      } else if (hour >= 11 && hour < 14) {
        message = "Noon";
      } else if (hour >= 14 && hour < 17) {
        message = "Afternoon";
      } else if (hour >= 17 && hour < 22) {
        message = "Evening";
      } else {
        message = "Night";
      }
    
    /* mm dakika MM ay olur hh  12s saat dilimine HH 24 */


  return (
    /*clock-container, conponentimizin tasiyicisidir. bu bilgilerin 
    formatini https://momentjs.com/  adresten aldik. farkli yapilar var orda  */
    <div className="clock-container">
        <div className="time">{timeStr}</div>
        <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
        </div>

    </div>
  )
}

export default Clock1