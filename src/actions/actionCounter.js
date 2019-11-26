let count = 0;
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incrementItem = () =>{
    return {type:INCREMENT_COUNTER,payload:{counter:++count}};
}

export const decrementItem = () =>{
    return {type:DECREMENT_COUNTER,payload:{counter:--count}};
}