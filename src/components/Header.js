import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  	appBar: {
    	borderBottom: `0px solid ${theme.palette.divider}`,
    	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  	},
	toolbar: {
    	flexWrap: 'wrap',
  	},
  	toolbarTitle: {
    	flexGrow: 2,
    },
	link: {
    	margin: theme.spacing(1, 1.5),
    },
}));

export default function Header() {
	const classes = useStyles();

  	return (
		<AppBar position="static" color="default" elevation={2} className={classes.appBar} square={false}>
      		<Toolbar className={classes.toolbar}>
        		<Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
          			Single Cell RNA Sequencing Analysis Tool
        		</Typography>
        		<Button href="http://www.jasonspencelab.com/" color="inherit" variant="outlined" className={classes.link}>
          			Learn More
        		</Button>
      		</Toolbar>
    	</AppBar>
    )
   };
