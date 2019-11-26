import React, { Component } from 'react'
import { Box, Text } from "grommet";
//import PropTypes from 'prop-types'

export default class postform extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    constructor(props){
        super(props);
        this.state={
            title : "",
            body :""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const post ={
            title: this.state.title,
            body:this.state.body
        };
        console.log(this.state);
        fetch('http://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
        console.log(JSON.stringify(post));
    }


    render() {
        return (
            <div>
                ADD
                <form onSubmit={this.onSubmit}>
                    <div>
                    <Box align="start">
                        <Text>Name</Text>
                        <input name="title" onChange={this.onChange} type="TextInput" value={this.state.title} />
                    </Box>

                        <Box align="start">
                        <Text>Body</Text>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                        <input type="submit" />
                    </Box>

                    </div>
                </form>

            </div>
        )
    }
}
