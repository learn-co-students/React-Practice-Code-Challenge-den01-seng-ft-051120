import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushiSelection, eatSushi, moreSushi }) => {
  const sushiBelt = sushiSelection.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
  })

  return (
    <Fragment>
      <div className="belt">
        {sushiBelt}
        <MoreButton moreSushi={moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer