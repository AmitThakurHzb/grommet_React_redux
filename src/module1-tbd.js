import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class MyModule1 extends Component{
	constructor(props) {
    super(props);
    this.state = {};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	componentDidMount() {

	  }

  componentWillUnmount() {
  }

	  handleChange(event) {
		this.setState({value: event.target.value.toUpperCase()});
	  }

	  handleSubmit(event) {
//		event.preventDefault();
	  }
  }

	render(){
		const element = (

			<Box align="center" pad="large" align="start">
			<Button hoverIndicator="light-1" onClick={() => { }}>
			  <Box pad="small" direction="row" border={{ color: 'brand', size: 'xxsmall' }} align="center" gap="small">
				<Add />
				<Text>Add</Text>
			  </Box>
			</Button>
		  </Box>

		);
		return element;
	}
}

export default MyModule1;

