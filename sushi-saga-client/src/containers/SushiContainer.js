import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const startPoint = props.page * 4
  return (
    <Fragment>
      <div className="belt">
        {
            props.sushiArr.slice(startPoint, startPoint + 4).map((sushi, index) => {
              return <Sushi 
                sushi={sushi} 
                handleEaten={props.handleEaten}
                key={index} />
            })
        }
        <MoreButton incrementStartPoint={props.incrementStartPoint}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
