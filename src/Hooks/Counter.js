import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setcounter] = useState(0)
    
    const increment = () => {
        setcounter(counter + 1)
    }
    const decrement = () => {
        setcounter(counter - 1)
        if (counter <=0){
            setcounter(0)
        }
    }
    return {
        counter,
        increment,
        decrement,
        setcounter
    }
}
