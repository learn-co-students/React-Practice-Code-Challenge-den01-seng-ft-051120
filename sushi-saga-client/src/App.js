import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    money: 100,
    sushis: [],
    eaten: [],
    displayIndex: 0
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(result => this.setState({sushis: result}))
  }

  displayFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  moreSushis = (event) => {
    if(this.state.displayIndex === this.state.sushis.length - 4){
      this.setState({
        displayIndex: 0
      })
    } else {
      this.setState({
        displayIndex: this.state.displayIndex + 4
      })
    }
  }

  eatSushi = (sushi) => {
    this.setState({
      eaten:[...this.state.eaten, sushi],
      money: this.state.money - sushi.price
    })
  }

  addMoney = (money) => {
    this.setState({
      money: this.state.money + money
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.displayFourSushis()}
          eaten={this.state.eaten}
          money= {this.state.money}
          moreSushis={this.moreSushis}
          eatSushi={this.eatSushi}
        />
        <Table 
          money={this.state.money}
          eaten={this.state.eaten}
          addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;