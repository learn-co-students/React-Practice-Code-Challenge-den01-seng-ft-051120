import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    servedSushi: [],
    plates: [],
    currentListIndex: 0,
    cash: 100
  }
  
  componentDidMount() {
    fetch(API)
      .then(results => results.json())
      .then(sushiList => this.setFirstSushiRender(sushiList))
  }

  setFirstSushiRender = (sushiList) => { this.setAllSushiState(sushiList), this.setServedSushiState(this.state.currentListIndex)}

  setAllSushiState = (sushiList) => { this.setState({ allSushi: sushiList }) }

  setServedSushiState = (index) => {
    console.log(index)
    let temporaryArray = this.state.allSushi
    let fourSushi = temporaryArray.slice(index, index + 4)
    this.setState({ servedSushi: fourSushi }) 
  }

  eatenSushi = (sushi) => {
    if(this.state.cash - sushi.price > 0) {
      let temporaryArray = this.state.plates
      temporaryArray.push(sushi)
      this.setState({
        plates: temporaryArray,
        cash: this.state.cash - sushi.price
      })
    } else {
      alert("Can not afford this sushi")
    }
  }

  moreSushi = () => {
    let newValue = this.state.currentListIndex + 4
    if(newValue === 100) {
      newValue = 0
      this.setState({
        currentListIndex: newValue
      })

    } else {
      this.setState({
        currentListIndex: newValue
      })
    }
    this.setServedSushiState(newValue)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer servedSushi={this.state.servedSushi} eatenSushi={this.eatenSushi} moreSushi={this.moreSushi}/>
        <Table cash={this.state.cash} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;