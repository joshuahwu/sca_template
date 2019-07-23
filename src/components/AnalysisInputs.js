import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Card from '@material-ui/core/Card';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({

    paper: {
	    margin: theme.spacing(0.5, 3),
	    display: 'stretch',
	    flexDirection: 'column',
	    alignItems: 'center',
  	},
  	root: {
    	height: '80vh',
    	background: theme.palette.common.white,
  	},
    form: {
	    width: '100%', // Fix IE 11 issue.
	    marginTop: theme.spacing(1),
  	},
  	leftPane: {
  		borderRight: '1px solid lightgray'
  	},
});

const basicFields = [
	{
		id:'sampleIDs',
		label:'Sample IDs',
		value:'',
		placeholder:'Ex: 2444-1'
	},
	{
		id:'markerGenes',
		label:'Initial Marker Genes',
		value:'',
		placeholder:'Ex: CDH5, EPCAM'
	},
];

const filterFields = [
	{
		id:'minCells',
		label:'Min Cells',
		defaultValue:'0',
		helperText:'Remove genes expressed in fewer cells'
	},
	{
		id:'minGenes',
		label:'Min Genes',
		defaultValue:'500',
		helperText:'Remove cells expressing fewer genes'
	},
	{
		id:'maxGenes',
		label:'Max Genes',
		defaultValue:'7500',
		helperText:'Remove cells expressing more genes'
	},
	{
		id:'maxCounts',
		label:'Max Counts',
		defaultValue:'30000',
		helperText:'Remove cells with more unique molecular identifiers'
	},
	{
		id:'maxMito',
		label:'Max Mito',
		defaultValue:'0.1',
		helperText:'Remove cells with higher mitochondrail gene expression'
	}
]

const analysisFields = [
	{
		id:'n_neighbors',
		label:'Nearest Neighbors',
		defaultValue:'15',
		helperText:'Size of local neighborhood'
	},
	{
		id:'n_pcs',
		label:'Principle Components',
		defaultValue:'11',
		helperText:'# of principle components used in construction of neighborhood graph'
	},
	{
		id:'spread',
		label:'Spread',
		defaultValue:'1',
		helperText:'How clumped embedded points are'
	},
	{
		id:'min_dist',
		label:'Min Distance',
		defaultValue:'0.4',
		helperText:'Minimum distance between points on the cluster graph'
	},
	{
		id:'resolution',
		label:'Resolution',
		defaultValue:'0.1',
		helperText:'Number of clusters identified'
	}
]

class AnalysisInputs extends React.Component {
	constructor(props) {
		super(props);
		this.handleBasicFieldChange = this.handleBasicFieldChange.bind(this);
		this.state = {
			basicFieldValues:['',''],
			filterFieldValues:['0','500','7500','30000','0.1'],
			sampleIDs:'sample',
			markerGenes:'marker',
			umapCheck:false,
			tsneCheck:false,
			dotCheck:false,
			violinCheck:false,
			dotColor:''
		}
	}
	handleBasicFieldChange(value,i) {
		this.setState(prevState => {
			const tempVals = prevState.basicFieldValues;
			tempVals[i] = value;
			console.log(value)
			return{
				basicFieldValues: tempVals
			}
		})

	}

	handlefilterFieldChange(value,i) {
		this.setState(prevState => {
			const tempVals = prevState.filterFieldValues;
			tempVals[i] = value;
			console.log(value)
			return{
				filterFieldValues: tempVals
			}
		})

	}

	handleChange(e,name) {
		this.setState({[name]:e.target.checked});
	};

	render() {
		const {classes} = this.props;
		return(
			<Grid container component="main" alignItems='stretch' justify="center" spacing={1}>
		  	<Grid item xs={6} sm={6} md={6}  component={Paper} className={classes.leftPane}>
		  		<Container>
		  			<Typography variant="h7" color="inherit" noWrap>
		      			Basic Information
		    		</Typography>
						{basicFields.map((field,i) => (
							<TextField
					        id={field.id}
					        label={field.label}
					        type="search"
					        value={this.state.basicFieldValues[i]}
					        //onClick={e=>this.setState({basicFieldValue:['']})}
					        onChange={(e)=>{
					        		this.handleBasicFieldChange(e.target.value,i);
					        		//console.log(e.target.value)
					        	}
					        }
					        style={{ margin: 8 }}
					        placeholder={field.placeholder}
					        fullWidth
					        margin="normal"
					        InputLabelProps={{
					        	shrink: true,
					        }}
					    />
						))}


		  			<Typography variant="h7" color="inherit">
		      			Filtering Parameters
		    		</Typography>


					<Grid container spacing={1}>
		    			{filterFields.map((field,i) =>(
		    				<Grid item xs={6} sm={4}>
		    				<TextField
						        id={field.id}
						        label={field.label}
						        style={{ margin: 8 }}
						        value={this.state.filterFieldValues[i]}
						        onChange={(e)=>{this.handlefilterFieldChange(e.target.value,i)}}
						        defaultValue={field.defaultValue}
						        helperText={field.helperText}
						        fullWidth
						        margin="normal"
						        InputLabelProps={{
						        	shrink: true,
						        }}
						    />
						    </Grid>
						))}
					</Grid>

					<Typography variant="h7" color="inherit">
		      			Analysis Parameters
		    		</Typography>

		    		<Grid container spacing={1}>
		    			{analysisFields.map(field =>(
		    				<Grid item xs={6} sm={4}>
		    				<TextField
						        id={field.id}
						        label={field.label}
						        style={{ margin: 8 }}
						        defaultValue={field.defaultValue}
						        helperText={field.helperText}
						        fullWidth
						        margin="normal"
						        InputLabelProps={{
						        	shrink: true,
						        }}
						    />
						    </Grid>
						))}
					</Grid>


		  		</Container>
		  		<br/>
		  	</Grid>

		  	<Grid item xs={6} sm={6} md={6} component={Paper}>
			  	<Container>
			  		<Typography variant="h7" color="inherit" noWrap>
			      		Select Plots
			    	</Typography>
			    	<Grid container spacing={1}>
			    		<Grid item xs={6} sm={4}>
				    		<FormControlLabel
								control={<Checkbox 
											color="secondary" 
											checked={this.state.dotCheck} 
											onChange={e=>this.setState({dotCheck:e.target.checked})}
										/>}
								label="Dot Plot"
							/>
			    		</Grid>
			    		<Grid item xs={6} sm={4}>
				    		<FormControlLabel
								control={<Checkbox 
											color="secondary" 
											checked={this.state.tsneCheck} 
											onChange={e=>this.setState({tsneCheck:e.target.checked})}
										/>}
								label="t-SNE"
							/>
			    		</Grid>
			    		<Grid item xs={6} sm={4}>
				    		<FormControlLabel
								control={<Checkbox 
											color="secondary" 
											checked={this.state.umapCheck} 
											onChange={e=>this.setState({umapCheck:e.target.checked})}
										/>}
								label="UMAP"
							/>
			    		</Grid>
			    	</Grid>

				  	<Grid container spacing={2}>
				  		<Grid item fullWidth>
					  	{this.state.dotCheck && <Card>
					        <ExpansionPanel square>
						        <ExpansionPanelSummary
						          aria-controls="panel1a-content"
						          id="panel1a-header"
						        >
						          <Typography className={classes.heading}>Additional Dot Plot Options</Typography>
						        </ExpansionPanelSummary>
						        <ExpansionPanelDetails>
						        	<Grid container>

						          	<FormControl className={classes.formControl}>
								        <InputLabel htmlFor="age-simple">Age</InputLabel>
								        <Select
								          value={this.state.dotColor}
								          onChange={e=>this.setState({dotColor:e.target.value})}
								          inputProps={{
								            name: 'age',
								            id: 'age-simple',
								          }}
								        >
								          <MenuItem value={10}>Ten</MenuItem>
								          <MenuItem value={20}>Twenty</MenuItem>
								          <MenuItem value={30}>Thirty</MenuItem>
								        </Select>
								    </FormControl>
								    </Grid>
						        </ExpansionPanelDetails>
						    </ExpansionPanel>
				   		</Card>}
				   		</Grid>
				  		<Grid item>
					  	{this.state.tsneCheck && <Card>
					        <ExpansionPanel square>
						        <ExpansionPanelSummary
						          aria-controls="panel1a-content"
						          id="panel1a-header"
						        >
						          <Typography className={classes.heading}>Additional t-SNE Plot Options</Typography>
						        </ExpansionPanelSummary>
						        <ExpansionPanelDetails>
						          	<TextField
								        id="maxMito"
								        label="Max Mito"
								        style={{ margin: 8 }}
								        defaultValue="0.1"
								        helperText="Remove cells with higher mitochondrial gene expression"
								        fullWidth
								        margin="normal"
								        InputLabelProps={{
								        	shrink: true,
								        }}
								    />
						        </ExpansionPanelDetails>
						    </ExpansionPanel>
				   		</Card>}
				   		</Grid>
				   		<Grid item>
				   		{this.state.umapCheck && <Card>
					        <ExpansionPanel square>
						        <ExpansionPanelSummary
						          aria-controls="panel1a-content"
						          id="panel1a-header"
						        >
						          <Typography className={classes.heading}>Additional UMAP Plot Options</Typography>
						        </ExpansionPanelSummary>
						        <ExpansionPanelDetails>
						          	<TextField
								        id="maxMito"
								        label="Max Mito"
								        style={{ margin: 8 }}
								        defaultValue="0.1"
								        helperText="Remove cells with higher mitochondrial gene expression"
								        fullWidth
								        margin="normal"
								        InputLabelProps={{
								        	shrink: true,
								        }}
								    />
						        </ExpansionPanelDetails>
						    </ExpansionPanel>
				   		</Card>}
				   		</Grid>
			    	</Grid>
			    </Container>
		  		
		  	</Grid>
		</Grid>
		);
	}
}

export default withStyles(styles)(AnalysisInputs);
