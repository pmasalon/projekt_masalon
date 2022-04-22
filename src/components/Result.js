 import React from "react";
 import Style from './Style.css'

 const Result = props => {
     const {color,compatibility,current_date,date_range,description,lucky_number,lucky_time,mood} = props.results
    return(
        <React.Fragment>
        <div className="main">
        <div className="aaa">Your color: {color}</div>
        <div className="aaa">Compatibility: {compatibility}</div>
        <div className="aaa">Current date: {current_date}</div>
        <div className="aaa">Date range: {date_range}</div>
        <div className="des">Description: {description}</div>
        <div className="bbb">Lucky number: {lucky_number}</div>
        <div className="bbb">Lucky time: {lucky_time}</div>
        <div className="bbb">Mood: {mood}</div>
        </div>
        </React.Fragment>
    )
}

export default Result