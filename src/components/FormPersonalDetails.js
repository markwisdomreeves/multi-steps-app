
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
    /* this is the continue method to allow the 
    user to contintue clicking the button */
    continue = e => {
        e.preventDefault();
        /* we are calling the nextStep mothod we 
        passed to this FormUserDetails Component */
        this.props.nextStep();
    }
    /* this is the continue method to allow the 
    user to contintue clicking the button */
    back = e => {
        e.preventDefault();
        /* we are calling the nextStep mothod we 
        passed to this FormUserDetails Component */
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                      hintText="Enter Your Email"
                      floatingLabelText="Email"
                      onChange={handleChange("email")}
                      defaultValue={values.email}
                    />
                    <br />
                    <TextField
                      hintText="Enter Your Occupation"
                      floatingLabelText="Occupation"
                      onChange={handleChange("occupation")}
                      defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                      hintText="Enter Your City"
                      floatingLabelText="City"
                      onChange={handleChange("city")}
                      defaultValue={values.city}
                    />
                    <br />
                    <TextField
                      hintText="Enter Your Bio"
                      floatingLabelText="Bio"
                      onChange={handleChange("bio")}
                      defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
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

export default FormPersonalDetails;