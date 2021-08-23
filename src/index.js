import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FixedContainer from'./App.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function CenteredGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
      <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    </Container>
  </React.Fragment>

   
  );
}
ReactDOM.render(<CenteredGrid/>, document.querySelector('#root5'));

const useStyles1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

 function IconButtons() {
  const classes = useStyles1();

  
  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
   
   
     
  
    </div>
  );
}

ReactDOM.render(<IconButtons/>,document.getElementById('root2'));




class Hello extends React.Component{
  render(){
    return (
      <div class="new">
          <h1 class="madhu"> Hello Welcome React.js</h1>
          <h2 class="rey">This is my first react program</h2>
      </div>
        );
  }
}
ReactDOM.render(<Hello/>,document.getElementById('root'));

const mine=<p>Hello, welcome to React JS</p>
ReactDOM.render(mine,document.getElementById("d1"));



function App() {
  return (
    <div >
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>

    </div>
  );
}
ReactDOM.render(<App/>,document.getElementById('root1'));

function box(){
  return(

    <Box component="span" m={1}>
      {'Hello'}
    </Box>
  );
}


function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '300px' }} />
      </Container>
    </React.Fragment>
  );
}
ReactDOM.render(<SimpleContainer/>,document.getElementById('root3'));
ReactDOM.render(<FixedContainer/>,document.querySelector('#root4'));