import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import { Meter, Button, Box } from "grommet";
import { Refresh } from "grommet-icons";
import { progress, clearProgress } from "../utils";

export class ProgressLoader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      completed: 0
    };
    this.progress = progress.bind(this);
    this.clearProgress = clearProgress.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(0), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <ContentContainer
        width="xlarge"
        title="Progress Indicators"
        content="The meter can be used as a bar to display loading for the user to visual see the loading progress"
      >
        <Meter
          alignSelf="start"
          background="light-2"
          thickness="small"
          type="bar"
          size="medium"
          values={[
            {
              value: this.state.completed,
              color: "brand"
            }
          ]}
        />
        <Box align="start" margin={{ top: "small" }}>
          <Button
            icon={<Refresh />}
            label="Reload"
            onClick={() => {
              this.clearProgress();
            }}
          />
        </Box>
      </ContentContainer>
    );
  }
}

export default ProgressLoader;
