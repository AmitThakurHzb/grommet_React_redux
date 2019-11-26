import React, { Component } from "react";
import { Box, Text, Stack, Paragraph, Heading } from "grommet";
import Spinner from "./Spinner/SpinnerBrand";

export class OverLay extends Component {
  render() {
    return (
      <Stack anchor="center">
        <Box
          round
          border={{ color: "grey" }}
          pad="medium"
          gap="small"
          direction="column"
          background="white"
        >
          <Heading color="light-5" level="2" margin="none" size="small">
            Loading Spinner with OverLay
          </Heading>
          <Text color="light-5" size="medium">
            Spinner with customizable overlay text.
          </Text>
          <Paragraph color="light-5">
            "Good design makes a product understandable" – Dieter Rams
          </Paragraph>
        </Box>
        <Box pad="medium" round="medium">
          <Spinner />
        </Box>
      </Stack>
    );
  }
}
