import React, { Component } from "react";
import "./App.css";
import { hpe } from "grommet-theme-hpe";
import RmcForm from "./components/redux_form";
import DataTable from "./components/redux_table";
import { table1_data } from "./Data/tableData";
import Posts from "./components/Post";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import { Grommet, Box, Grid, Text, Meter } from "grommet";
import store from "./store/store";

//================Mock data========
var tableCol = [
  {
    property: "name",
    header: <Text>Name</Text>,
    primary: true
  },
  {
    property: "Company",
    header: <Text>Company</Text>,
    primary: true
  },
  {
    property: "percent",
    header: "Progress",
    render: datum => (
      <Box pad={{ vertical: "xsmall" }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    )
  }
];

class App extends Component {
  state = {
    table_col: tableCol,
    table_data: table1_data
  };

  render() {
    const { table_col, table_data } = this.state;

    return (
      <Provider store={store}>
        <Grommet className="App" theme={hpe}>
          <Grid columns="small" gap="small">
            <Box>
              <Posts />
              <hr />
              <Postform />
            </Box>
          </Grid>
          <Grid columns="small" gap="medium">
            <h3>Demo Table with mock data source.</h3>
            <DataTable columns={table_col} data={table_data} />
          </Grid>
          <Grid columns="small"><h3>Demo Form Layout.</h3></Grid>
          <Grid columns="small" gap="medium">

            <RmcForm />
          </Grid>
        </Grommet>
      </Provider>
    );
  }
}
export default App;
