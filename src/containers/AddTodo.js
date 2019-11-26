import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/** Use of Ref */

// const AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault()
//           if (!input.value.trim()) {
//             return
//           }
//           dispatch(addTodo(input.value))
//           input.value = ''
//         }}
//       >
//         <input ref={node => (input = node)} placeholder='Item Name' />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   )
// }

// export default connect()(AddTodo)

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };

  }

  updateInput = input => {
    this.setState({ input });
  };



  handleAddTodo = () => {
    let input = this.state.input;
    if (!input.trim()) {
      return;
    }
    this.props.addTodo(input);
    this.setState({ input: "" });
  };

 /** method to check on trigger on blur of button */
  onblurout = (input) => {
    console.log('on call of blur' + input);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo} onBlur ={e=>{this.onblurout(e.target.textContent)}}>
          Add Item
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);