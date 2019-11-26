import React, { Component } from 'react';
import '../App.css';
import {
  DataTable,
} from "grommet";


class AppTable extends Component {

  state = {
    table_col: this.props.columns,
    table_data: this.props.data
  };


  render() {
    const {
      table_col,
      table_data,
    } = this.state;

    return (

            <DataTable
            columns={table_col}
            data={table_data}
        />

    );
  }
}

export default AppTable;
