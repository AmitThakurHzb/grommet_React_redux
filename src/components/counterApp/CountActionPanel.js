import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {incrementItem, decrementItem } from '../../actions/actionCounter'

class CountActionPanel extends Component {

    constructor(props) {
        super(props);
      }

    onIncrement = ()=>{
        this.props.increment();
    }

    onDecrement = ()=>{
        this.props.decrement();
    }
    componentWillUpdate(nextProps,nextState){
        console.log("===compUpdate===");
        console.log(nextState);
    }


    render() {
        return (
            <div>
               <form>
               <input id="" type="button" value="+"  onClick = {this.onIncrement}/>
               <input id="" type="button" value="-" onClick = {this.onDecrement} />
               </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    increment:incrementItem,
    decrement:decrementItem
}
/* Below section is needed only if values to be shown in current panel*/
// const mapStateToProps = (state ,ownProps)=>{
//     console.log(`mapStateToProps -> ${JSON.stringify(state.counter)}`);
//     console.log(`mapStateToProps -> ${JSON.stringify(ownProps)}`);
//     return {counter1:state.counter}
// }


// CountActionPanel.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncrement: PropTypes.func.isRequired,
//     onDecrement: PropTypes.func.isRequired
//   }
export default connect(null,mapDispatchToProps)(CountActionPanel);
