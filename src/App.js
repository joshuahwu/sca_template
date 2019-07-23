import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Footer from './components/Footer';
import AnalysisInputs from './components/AnalysisInputs'
import FormControlLabel from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      	backgroundColor: theme.palette.common.white,
      	backgroundImage: 'url(https://source.unsplash.com/random)',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	    backgroundPosition: 'center',
	    // fontFamily: ['Literata', 'serif'].join(','),
    },
    ul: {
      	margin: 0,
      	padding: 30,
    },
    li: {
      	listStyle: 'none',
    },},
    submit: {
    	margin: theme.spacing(0,1,1)
    }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid container component="main" className={classes.image} spacing={2}>
    	<Grid item>
	    	<Header/>
	    </Grid>
	    <AnalysisInputs/>
	    <Button
	   	 	fullWidth
			type="submit"
			variant="contained"
			color="secondary"
			className={classes.submit}
		>
			Run Analysis
	    </Button>
	    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    <Footer />
    </React.Fragment>
  );
}

// export default App;