import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const Table = ({money, eaten, addMoney}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${money} remaining!
      <SushiWallet addMoney={addMoney} />
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eaten)
          }
        </div>
      </div>

    </Fragment>
  )
}

export default Table