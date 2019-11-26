import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import AnimatedBox from "./StyledPlaceholderBox/index";
import { Box } from "grommet";

export class PlaceHolder extends Component {
  render() {
    return (
      <ContentContainer
        title="PlaceHolder"
        content="Loading placeholder effect before the actual text content arrives."
      >
        <Box gap="small">
          <AnimatedBox height="15px" width="400px" />
          <AnimatedBox height="10px" width="350px" />
          <AnimatedBox height="10px" width="350px" />
        </Box>
      </ContentContainer>
    );
  }
}
