import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </Grid>

    </React.Fragment>
  );
}