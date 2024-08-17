import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'
import { connect } from 'react-redux'

function IceCreamComponent(props) {
  return (
    <div>
        <h1>
            Number of ice creams - {props.numOfIceCreams}
        </h1>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
