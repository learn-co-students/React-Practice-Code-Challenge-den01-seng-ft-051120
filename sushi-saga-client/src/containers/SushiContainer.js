import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = ({ sushis, moreSushis, eatSushi, eaten, money}) => {

  const displaySushis = () => {
    return sushis.map(sushi => {
      return (
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          eatSushi={eatSushi} 
          eaten={eaten} 
          money={money} 
        />
      )
    })
  }
   
  return (
    <Fragment>
      <div className="belt">
        {displaySushis()}
        <MoreButton moreSushis={moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer