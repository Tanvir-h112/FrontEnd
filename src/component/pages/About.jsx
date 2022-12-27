import { useState } from "react";
import * as React from 'react'
import Layout from "../input-group/layout/Layout";
import DisplayCount from "../displayCount/DisplayCount";
import Buttons from "../buttons/Buttons";
import UpdateIncrementDecrement from "../update-inc/UpdateIncrementDecrement";

function About(){
const [count, setCount] = useState(0)
const [incrementValue, setIncrementValue] = useState(5)
const [decrementValue, setDecrementValue] = useState(10)


function increment(){
    setCount(count + incrementValue);
 
}
function decrement(){
    setCount(count - decrementValue);
}

function handleIncrementChange(e){
    setIncrementValue(parseInt(e.target.value))
}

function handleDecrementChange(e){
    setDecrementValue(parseInt(e.target.value))
}

    return (
        <Layout>
            <DisplayCount count={count} />
            <UpdateIncrementDecrement incrementValue={incrementValue} decrementValue={decrementValue} handleIncrementChange={handleIncrementChange} handleDecrementChange={handleDecrementChange} />
            <Buttons increment={increment} decrement={decrement} />
        </Layout>
    )
}

export default About;