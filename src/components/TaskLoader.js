import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import Spinner from "./Spinner/SpinnerBrand";
import { DataTable } from "grommet";

export class TaskLoader extends Component {
  render() {
    return (
      <ContentContainer
        title=" Datatable with Inline Loading Spinner"
        content="The loading spinner can be aligned left or justified and
      with or without text."
      >
        <DataTable
          size="small"
          columns={[
            {
              property: "name",
              header: "Name",
              primary: true
            },
            {
              property: "Location",
              header: "Location"
            },
            {
              property: "Task",
              header: "Task"
            }
          ]}
          data = {[
            { name: 'Alan', Task: 20, Location: 'HPE' },
            { name: 'Bryan', Task: 30, Location: 'HP' },
            { name: 'Chris', Task: 40, Location: 'ARUBA' },
            { name: 'Eric', Task: 80, Location: 'DXC' }
          ]}
        />
        <Spinner />
      </ContentContainer>
    );
  }
}
