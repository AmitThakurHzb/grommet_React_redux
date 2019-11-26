import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// class CountDisplayPanel extends Component {
//     constructor(props) {
//         super(props);
//         PropTypes.item = props.counterItem.counter;
//       }
//     render() {
//         return (
//             <div>
//               <p>Clicked : {PropTypes.item}</p>
//             </div>
//         )
//     }
// }

const CountDisplayPanel=(props)=>{
        console.log(props);
    return (
        <div>
            <p>Clicked : {props.counterItem.counter}</p>
        </div>
    )
}
/** Method to map store state to props */
const mapStateToProps = (state)=>{
    console.log(state);
    return {counterItem:state.counterItem}
}

export default connect(mapStateToProps)(CountDisplayPanel);
