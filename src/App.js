import React, { Component } from 'react';
import './App.css';
import { hpe } from 'grommet-theme-hpe';

import {
  Grommet,
  ResponsiveContext,
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Calendar,
  Chart,
  CheckBox,
  Clock,
  DataTable,
  Diagram,
  Distribution,
  FormField,
  Grid,
  Heading,
  Menu,
  Meter,
  Paragraph,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Tab,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Video
} from "grommet";
import { Add } from "grommet-icons";
import { generate } from "grommet/themes/base";
import { deepMerge } from "grommet/utils";
import {
  Header,
  ButtonLoader,
  AccordionLoader,
  OverLay,
  InfinateLoad,
  PlaceHolder,
  ProgressLoader,
  MenuLoader,
  TextLoader,
  TaskLoader,
  Shimmer
} from "./components";

class AppBody extends Component {

  state = {
    baseSize: 24,
    checkBox: true,
    radioButton: "RadioButton 1",
    rangeSelector: [1, 2],
    themeName: "hpe"
  };

  render() {
    const {
      background,
      baseSize,
      checkBox,
      radioButton,
      rangeSelector,
      tabIndex,
      themeName
    } = this.state;

    return (
      <Grommet theme={hpe}>
        <Heading>HPE RMC! </Heading>
        <Box gap="medium" fill background="light-1">
          <Box
            gap="medium"
            alignSelf="center"
            width="large"
            background="light-3"
          >
            <Header />
            <Box gap="medium" alignSelf="center" width="large" pad="medium">
              <TaskLoader />
              <Box
                alignSelf="center"
                gap="large"
                margin="medium"
                width="large"
                direction="row-responsive"
              >
                <Box gap="large" direction="column">
                  <TextLoader />
                  <ProgressLoader />
                  <OverLay />
                  <AccordionLoader />
                </Box>
                <Box gap="large" direction="column">
                  <ButtonLoader />
                  <PlaceHolder />
                  <MenuLoader />
                  <InfinateLoad />
                </Box>
              </Box>
              <Box alignSelf="center" width="large">
                <Shimmer />
              </Box>
            </Box>
          </Box>
        </Box>

        <Grid
          align="start"
          columns={{ count: "fill", size: "medium" }}
          gap="medium"
        >
          {"Blank"}
        </Grid>

      </Grommet>

    );
  }
}

const App = () => (
  <Grommet full>
    <AppBody />
  </Grommet>
);

export default App;
