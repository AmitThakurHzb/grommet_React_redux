/**
 * tips
 * short hand rccp tap will give you class level component structure.
 * short hand rfc tab will give you function level component structure.
 */

import React, { Component, Fragment } from 'react'
//import PropTypes, { func } from 'prop-types'

const styleList = {
    "listStyle": "decimal",
    "borderBottom": "1px solid #ccc",
    "lineHeight":"35px"
}

const styleUL = {
    "width": "600px",
    "borderTop": "1px solid #eee",
    "borderBottom": "1px solid #eee",
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentWillMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            });


    }

    render() {

        const postItems = this.state.posts.map(post => (
            <li style={styleList} key={post.id}>
                {post.title}
            </li>

        ));
        return (
            <Fragment>
                <article style={{"width":"800px","textAlign":"left"}}>
                    In this application will make fetch call 'http://jsonplaceholder.typicode.com/'
                    and Get Item to be shown as List in React Component.
                </article>
                <hr />
                <h4>List all POST</h4>
                <ul style={styleUL}>{postItems}</ul>
            </Fragment>
        )
    }
}

export default Post;
