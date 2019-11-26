import React, { Component } from "react";
import { Box, Form, Button ,Text} from "grommet";
import { Add, Edit } from "grommet-icons";

export default class FOAM extends Component {
    render() {
        return (
            <Box
                pad={{ vertical: 'small' }}
                margin={{vertical:'large'}}
                border = {{side:'top',color:'#ccc'}}
            >
                <Form>
                    <Box align="start">
                        <Text>Name</Text>
                        <input type="TextInput" />
                    </Box>
                    <Box align="start">
                        <Text>Company</Text>
                        <input type="TextInput" />
                    </Box>
                    <Box align="start">
                        <Text>Progress</Text>
                        <input type="TextInput" />
                    </Box>

                    <Box align="start" pad="small" >
                        {/* <input type="Button" value="Add" /> */}
                        <Button><Add /></Button>
                        <Button><Edit /></Button>
                    </Box>

                </Form>
            </Box>
        );
    }
}
