import React, { Component } from 'react'
import { connect } from 'react-redux'

const CountDisplayPane2=(props)=>{
        console.log(props);
    return (
        <div>
            <h3>Cart Item : {props.counterItem.counter}</h3>
        </div>
    )
}
/** Method to map store state to props */
const mapStateToProps = (state)=>{
    console.log(state);
    return {counterItem:state.counterItem}
}

export default connect(mapStateToProps)(CountDisplayPane2);
