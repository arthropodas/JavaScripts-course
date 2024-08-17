import store from "../store"
import { BUY_ICE_CREAM } from "./iceCreamType"

export const buyIceCream=()=>{
    console.log("number of icecreams",store.getState())
    return {
        
        type :BUY_ICE_CREAM
    }
}