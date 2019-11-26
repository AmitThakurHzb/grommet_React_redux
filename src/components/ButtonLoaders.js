import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import { Button, Box, Text } from "grommet";

const spinning = (
  <svg
    version="1.1"
    viewBox="0 0 32 32"
    width="24px"
    height="24px"
    fill="#7D4CDB"
  >
    <path
      opacity=".25"
      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
    />
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 16 16"
        to="360 16 16"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export const Spinner = () => (
  <Box align="center" justify="center">
    {spinning}
  </Box>
);

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 9000));
}

export class ButtonLoader extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }
  render() {
    const { isLoading } = this.state;
    return (
      <ContentContainer title="Button" content="Click to see the loader">
        <Box width="small">
          <Button
            onClick={!isLoading ? this.handleClick : null}
            label={
              isLoading ? (
                <Box direction="row" gap="small">
                  {" "}
                  <Spinner /> <Text size="medium"> Loading... </Text>
                </Box>
              ) : (
                "Button"
              )
            }
          />
        </Box>
      </ContentContainer>
    );
  }
}
