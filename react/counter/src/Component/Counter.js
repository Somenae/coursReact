const Counter = ({counter, onCLickLess, onCLickMore, onCLickLessAll, onCLickMoreAll}) => {

    return (
        <section>
            <button
            onClick={() => {onCLickLess(counter.id)}}>-</button>
            <button>{ counter.value }</button>
            <button
            onClick={() => {onCLickMore(counter.id)}}>+</button>
        </section>
    );
}

export default Counter;