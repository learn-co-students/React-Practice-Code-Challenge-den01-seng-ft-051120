import React, { Fragment } from 'react'

const Sushi = ({ sushi, eatSushi }) => {
  return (
    <div className="sushi">
      {sushi.name ?
        (<Fragment>
          <div className="plate" onClick={() => eatSushi(sushi)}>
            <img src={sushi.img_url} width="100%" alt={sushi.name} />
          </div>
          <h4 className="sushi-details">
            {sushi.name} - ${sushi.price}
          </h4>
        </Fragment>)
        : null}
    </div>
  )
}

export default Sushi