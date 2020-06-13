
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Success" />
                    <h1>Thank You For Submission</h1>
                    {/* <p>You will get an email with further instructions</p> */}
                    {/* WE CAN USE THIS BUTTON TO TAKE YOU BACK TO THE MAIN WEB PAGE */}

                    {/* <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    /> */}
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;