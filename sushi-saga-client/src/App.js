import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    newSushi: [],
    eatenSushi: [],
    cash: 100
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(allSushi => this.setState({ allSushi }))
      .then(this.nextSushi)
  }

  nextSushi = e => {
    let currentSushi = this.state.allSushi
    let oldSushi = this.state.newSushi
    const newSushi = currentSushi.splice(0, 4)
    this.setState({
      ...this.state,
      allSushi: [...currentSushi, ...oldSushi],
      newSushi
    })
  }

  eatSushi = selectedSushi => {
    if (this.state.cash > selectedSushi.price) {
      const uneatenSushi = this.state.newSushi.filter(sushi => {
        return sushi.id !== selectedSushi.id
      })
      this.setState({
        ...this.state,
        newSushi: uneatenSushi,
        eatenSushi: [...this.state.eatenSushi, selectedSushi],
        cash: this.state.cash - selectedSushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          moreSushi={this.nextSushi}
          sushiSelection={this.state.newSushi}
          eatSushi={this.eatSushi} />
        <Table cash={this.state.cash} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;