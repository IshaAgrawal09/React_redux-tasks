import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/Cakes/CakeAction";
import { initialState } from "../Redux/Cakes/CakeReducer";
const CakeContainer = (props) => {
  return (
    <div>
      <h3>Initial Number of Cakes in Store: {initialState.numOfCakes}</h3>
      {/* <p>Number of Cakes: {props.numOfCakes}</p>
      <button onClick={props.buyCake}>Buy Cake</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
