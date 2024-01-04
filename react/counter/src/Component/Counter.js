import { useState } from "react";

const Counter = ({counter, onCLickLess, onCLickMore, onCLickLessAll, onCLickMoreAll}) => {

/*     function handleClickLess() {
        setCounterValue((value) => value - 1);
    }

    function handleClickPlus() {
        setCounterValue((value) => value + 1);
    }
 */
    return (
        <section>
            <button
            onClick={() => {onCLickLessAll()}}>-</button>
            <button
            onClick={() => {onCLickMoreAll()}}>+</button>
            <button
            onClick={() => {onCLickLess(counter.id)}}>-</button>
            <button>{ counter.value }</button>
            <button
            onClick={() => {onCLickMore(counter.id)}}>+</button>
        </section>
    );
}

export default Counter;