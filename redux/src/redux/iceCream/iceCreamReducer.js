import { BUY_ICE_CREAM } from "./iceCreamType"

const initialState ={
    numOfIceCreams :20
}

const iceCreamReducers=(state =initialState,action)=>{
    switch (action.type){
        case BUY_ICE_CREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        default: return state
    }
}

export default iceCreamReducers