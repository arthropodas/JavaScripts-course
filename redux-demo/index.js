const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESCTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESCTOKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockIceCream(qty) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

const initialCakeState = {
  numOfCakes: 10,
 
};

const initialIceCreamState = {
  numOfIceCreams: 15,
};

//(previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};


const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  
})
const store = redux.createStore(rootReducer);
console.log("initial state", store.getState());
store.subscribe(() => {
//   console.log("calling subscribe");
  console.log("updated State", store.getState());
});

const unSubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(5);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);
unSubscribe();
