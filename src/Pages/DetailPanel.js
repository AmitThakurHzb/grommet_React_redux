import React, { Component } from "react";
import { Grid, Box, Paper, Divider,Fab, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {AccordionLoader} from '../components/AccordionLoaders';
//import EditIcon from '@material-ui/icons/Edit';
//import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // background:'#fff'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
  },
  paper_primary: {
    //background: '#ccc',
    //border:'1px solid #eee',
    padding: theme.spacing(3),
    textAlign: 'left',
    marginBottom: '30px',
    boxShadow:'none',
    //borderBottom: '1px solid #ccc'

  },
  box_title: {
    background: '#eee',
    paddingBottom: '0px',
    marginBottom: '0px'
  },
  grid_title: {
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  grid_title_head: {
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  fab: {
    margin: theme.spacing(1),

  },
  fab_wrapper:{
    direction:"rtl"
  }
}));


export default function Main() {

    const classes = useStyles();
    const message = `Details`;
    const message_vol = `volumes`;


    return (<div>
      <Box className={classes.fab_wrapper}>
      <Fab  aria-label="add" className={classes.fab}>
        EDIT
      </Fab>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        ADD
      </Fab>
      </Box>
      <Box >
        <Paper className={classes.paper_primary}>
          <Typography variant="h6" gutterBottom>{message}</Typography>
          <Grid container spacing={2}>
            <Grid item xm={12} sm={12} md={6} lg={6} >
              <Paper className={classes.paper}>
                <Typography variant="button">Host Name</Typography>
                <Typography variant="body2" gutterBottom  > dg-primary</Typography>
                <Divider light />
                <Typography variant="button">IP Address</Typography>
                <Typography variant="body2" gutterBottom >172.17.32.212</Typography>
                <Divider light />
                <Typography variant="button">Updated Time</Typography>
                <Typography variant="body2" gutterBottom>-:-:-</Typography>
                <Divider light />
                <Typography variant="button">Kernel Version</Typography>
                <Typography variant="body2" gutterBottom>3.10.0-693.el7.x86_64</Typography>
              </Paper>
            </Grid>
            <Grid item xm={12} sm={12} md={6} lg={6} >
              <Paper className={classes.paper}>
                <Box>
                  <Typography variant="button">Operating System</Typography>
                  <Typography variant="body2" gutterBottom >Red Hat Enterprise Linux Server ( 7.4 )</Typography>
                  <Divider light />
                  <Typography variant="button">Hardware Architecture</Typography>
                  <Typography variant="body2" gutterBottom >x86_64</Typography>
                  <Divider light />
                  <Typography variant="button">User Name</Typography>
                  <Typography variant="body2" gutterBottom>root</Typography>
                  <Divider light />
                  <Typography variant="button">Description</Typography>
                  <Typography variant="body2" gutterBottom >-</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Divider light/>
      <Box>
        <Paper className={classes.paper_primary}>
          <Typography variant="h6" gutterBottom>{message_vol}</Typography>
          <Grid container spacing={2}>
            <Grid item xm={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
              <Typography variant="button" component='div'>Data</Typography>
                  <Typography variant="body2" component='span' >Volume</Typography>
                  <Typography variant="caption" component='span' > 3PAR_8400_2.4 </Typography>
                  <Typography variant="outline" component='span' > | </Typography>
                  <Typography variant="subtitle2" component='span' >3PAR</Typography>

              </Paper>
            </Grid>
            <Grid item xm={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <Box>
                  <Typography variant="button" component='div'>Data</Typography>
                  <Typography variant="body2" component='span'  >Volume</Typography>
                  <Typography variant="caption" component='span' > 3PAR_8400_2.3 </Typography>
                  <Typography variant="outline" component='span' > | </Typography>
                  <Typography variant="subtitle2" component='span' >NIMBLE</Typography>
                </Box>
              </Paper>
            </Grid>

          </Grid>

        </Paper>
      </Box>
      <AccordionLoader/>

    </div>

    );
  }