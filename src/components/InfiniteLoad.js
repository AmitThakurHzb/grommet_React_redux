import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import Spinner from "./Spinner/SpinnerBrand";
import { Select } from "grommet";

export class InfinateLoad extends Component {
  render() {
    return (
      <ContentContainer
        title="Infinite Load"
        content="Select with an inline loading spinner while waiting for content to
      load."
      >
        <Select
          alignSelf="center"
          dropHeight="small"
          placeholder="Select"
          options={["First", "Second", "Third", "Fourth", <Spinner />]}
        />
      </ContentContainer>
    );
  }
}
