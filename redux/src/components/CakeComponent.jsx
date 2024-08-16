import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeComponent(props) {
  return (
    <div>
      Number of cakes - {props.numOfCakes}
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()), // Corrected to a function that dispatches the action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
