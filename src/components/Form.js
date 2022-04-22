import React from "react";
import Style from './Style.css'

const Form = props => {
    return(
        <form onSubmit = {props.submit}>
            <label>choose your zodiac sign:</label>
            <div className="buttons">
            <button
            onClick = {props.clickAries}
            >Aries</button>
            <button
            onClick = {props.clickTaurus}
            >Taurus</button>
            <button
            onClick = {props.clickGemini}
            >Gemini</button>
            <button
            onClick = {props.clickCancer}
            >Cancer</button>
            <button
            onClick = {props.clickLeo}
            >Leo</button>
            <button
            onClick = {props.clickVirgo}
            >Virgo</button>
            <button
            onClick = {props.clickLibra}
            >Libra</button>
            <button
            onClick = {props.clickScorpio}
            >Scorpio</button>
            <button
            onClick = {props.clickSagittarius}
            >Sagittarius</button>
            <button
            onClick = {props.clickCapricorn}
            >Capricorn</button>
            <button
            onClick = {props.clickAquarius}
            >Aquarius</button>
            <button
            onClick = {props.clickPisces}
            >Pisces</button></div>

            
        </form>
    )
}

export default Form