import React, { Component, Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';

const LinkStyle = {
    padding: "0 20px",
    margin: "30px 0"
};

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Link style={LinkStyle} component={RouterLink} to="/">
                    Home
    </Link>
                <Link style={LinkStyle} component={RouterLink} to="/table">
                    Table
    </Link>
                <Link style={LinkStyle} component={RouterLink} to="/database">
                    Database
    </Link>
                <Link style={LinkStyle} component={RouterLink} to="/game">
                    Game
    </Link>
                <Link style={LinkStyle} component={RouterLink} to="/counter">
                    Counter APP
    </Link>
                <hr />
            </Fragment>
        )
    }
}

export default Header
