import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({servedSushi, eatenSushi, moreSushi}) => {
  const sushiComponents = servedSushi.map( sushi => {
    return <Sushi sushi={sushi} key={sushi.id} eatenSushi={eatenSushi}/>
  })
  return (
    <Fragment>
      <div className="belt">
        {sushiComponents}
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer