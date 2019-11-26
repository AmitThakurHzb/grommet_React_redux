import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import Spinner from "./Spinner/SpinnerBrand";
import { Accordion, AccordionPanel, Box } from "grommet";

export class AccordionLoader extends Component {
  state = {
    textLoaded: false
  };
  render() {
    const { textLoaded } = this.state;
    return (
      <ContentContainer
        title="Accordion"
        content="With inline loading spinner."
      >
        <Accordion
          onActive={activeIndexes => {
            if (activeIndexes.includes(1)) {
              // give sometime to emulate an async call
              setTimeout(() => {
                this.setState({ textLoaded: true });
              }, 9000);
            }
          }}
          multiple={true}
        >
          <AccordionPanel label="Panel 1">
            Text can appear right away.
          </AccordionPanel>
          <AccordionPanel label="Panel 2">
            {textLoaded ? (
              <Box style={{ height: "50px" }}>
                Loaded text can appear after loading time.
              </Box>
            ) : (
              <Box style={{ height: "50px" }}>
                <Spinner />
              </Box>
            )}
          </AccordionPanel>
          <AccordionPanel label="Panel 3">
            <Box style={{ height: "50px" }}>Text can appear right away.</Box>
          </AccordionPanel>
        </Accordion>
      </ContentContainer>
    );
  }
}
