import React, { Component } from "react";
import { Box, Heading } from "grommet";

export class Header extends Component {
  render() {
    return (
      <Box
        flex={false}
        pad="small"
        direction="row"
        background="white"
        align="center"
        justify="between"
        responsive={false}
      >
        <Heading level="4" margin="none">
          RMC Loading Page Examples
        </Heading>
      </Box>
    );
  }
}
