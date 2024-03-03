import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/redecerToolkitSlice';

const Hero = () => {
    const {count} = useSelector((s) => s.toolkit)
const dispatch = useDispatch()
    return (
        <div className='container'>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement(6))}>-</button>
        </div>
    );
};

export default Hero;