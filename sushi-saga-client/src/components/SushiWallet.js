import React, {Component} from 'react'

const intialState = {
    money: 0
}

export default class SushiWallet extends Component{

    state = intialState

    handleChange = (event) => {
        this.setState({
            money: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addMoney(parseInt(this.state.money))
        this.setState(intialState)    
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input 
                    type='number' 
                    name='money' 
                    placeholder='Enter amount' 
                    onChange={this.handleChange}
                    value={this.state.money}
                />
                <input type='submit' value='Add Money'/>
            </form>
        )
    }
}