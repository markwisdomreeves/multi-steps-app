
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    /* this is the continue method to allow the 
    user to contintue clicking the button */
    continue = e => {
        e.preventDefault();
        /* we are calling the nextStep mothod we 
        passed to this FormUserDetails Component */
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                      hintText="Enter Your First Name"
                      floatingLabelText="First Name"
                      onChange={handleChange("firstName")}
                      defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                      hintText="Enter Your Middle Name"
                      floatingLabelText="Middle Name"
                      onChange={handleChange("middleName")}
                      defaultValue={values.middleName}
                    />
                    <br />
                    <TextField
                      hintText="Enter Your Last Name"
                      floatingLabelText="Last Name"
                      onChange={handleChange("lastName")}
                      defaultValue={values.lastName}
                    />
                    <br />
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;