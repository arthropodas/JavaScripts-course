import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

export default function HooksCakeContainer() {
    const numOfCakes=  useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
       <h2>from hook</h2> Number of cakes -{numOfCakes}
        <button onClick={()=>dispatch(buyCake())}>
            buy cakes

        </button>

    </div>
  )
}
