import React from 'react';
import axios from 'axios';
import Form from './Form';
import Result from './Result';
import Style from './Style.css'

class App extends React.Component {
  state = {
      value: "",
      day: "",
      color: "",
      compatibility: "",
      current_date: "",
      date_range: "",
      description: "",
      lucky_number: "",
      lucky_time: "",
      mood: ""
}
buttonClick = () =>{
    this.setState({value: "aries"})
}
buttonClick2 = () =>{
    this.setState({value: "taurus"})
}
buttonClick3 = () =>{
    this.setState({value: "gemini"})
}
buttonClick4 = () =>{
    this.setState({value: "cancer"})
}
buttonClick5 = () =>{
    this.setState({value: "leo"})
}
buttonClick6 = () =>{
    this.setState({value: "virgo"})
}
buttonClick7 = () =>{
    this.setState({value: "libra"})
}
buttonClick8 = () =>{
    this.setState({value: "scorpio"})
}
buttonClick9 = () =>{
    this.setState({value: "sagittarius"})
}
buttonClick10 = () =>{
    this.setState({value: "capricorn"})
}
buttonClick11 = () =>{
    this.setState({value: "aquarius"})
}
buttonClick12 = () =>{
    this.setState({value: "pisces"})
}
//do zmiany value
handleInputChange = (e) => {
    this.setState({
        value: e.target.value
    })
}
handleSignSubmit = (e) =>{
    //zatrzymanie odswiezania
    e.preventDefault()
    const axios = require("axios")

    const options = {
        method: 'POST',
        url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
        params: {sign: this.state.value, day: 'today'},
        headers: {
          'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'f9c756fe23mshc3ad44330d8b930p16eb80jsn7ed9e637040b'
        }
      };

    axios.request(options)
    .then(response => {
        this.setState({
            color: response.data.color,
            compatibility: response.data.compatibility,
            current_date: response.data.current_date,
            date_range: response.data.date_range,
            description: response.data.description,
            lucky_number: response.data.lucky_number,
            lucky_time: response.data.lucky_time,
            mood: response.data.mood
        })
    })
    .catch(function (error) {
	console.error(error);
});
}
render(){
    return(
        <div className='App'> 
            <Form 
            set={this.state.value} 
            change={this.handleInputChange}
            submit={this.handleSignSubmit}
            clickAries={this.buttonClick}
            clickTaurus={this.buttonClick2}
            clickGemini={this.buttonClick3}
            clickCancer={this.buttonClick4}
            clickLeo={this.buttonClick5}
            clickVirgo={this.buttonClick6}
            clickLibra={this.buttonClick7}
            clickScorpio={this.buttonClick8}
            clickSagittarius={this.buttonClick9}
            clickCapricorn={this.buttonClick10}
            clickAquarius={this.buttonClick11}
            clickPisces={this.buttonClick12}
            />
            <Result
            results={this.state}
            />
        </div>
    )
}
}

export default App;
