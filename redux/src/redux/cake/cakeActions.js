import { BUY_CAKE } from "./cakeType"


export const buyCake=(number)=>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}