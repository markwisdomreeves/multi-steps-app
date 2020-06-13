
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import "./index.css";

class StepOne extends Component {

    state = {
        disabled: false
    }
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
    handleDisabled = () => {
        if (!this.disabled) {
            this.setState({
                disabled: true
            });
        }
    };

    render() {
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar title="Select a Detail" />

                    <RaisedButton
                    label="QUESTIONNARIO"
                    style={styles.button}
                    disabled={this.state.disabled}
                    // onChange={this.handleDisabled}
                    // className="btn"
                    // disabled
                    primary={true}
                    />
                    <br />
                    <RaisedButton
                    label="BIOGRAFIA"
                    primary={true}
                    style={styles.button}
                    disabled={true}

                    disabled={this.state.disabled}
                    // onChange={this.handleDisabled}
                    // className="btn"
                    // disabled
                    primary={true}
                    />
                     <br />
                    <RaisedButton
                    label="COMUNICATO STAMPA"
                    primary={false}
                    style={styles.button}

                    disabled={this.state.disabled}
                    // onChange={this.handleDisabled}
                    // className="btn"
                    // disabled
                    primary={true}
                    />
                     <br />
                    <RaisedButton
                    label="INTERVISTE"
                    primary={false}
                    style={styles.button}
                    
                    disabled={this.state.disabled}
                    // onChange={this.handleDisabled}
                    // className="btn"
                    // disabled
                    primary={true}
                    />

                    
                    <br />
                    <RaisedButton
                    label="Continue"
                    secondary={true}
                    style={styles.button}
                    onClick={this.continue}
                    // className="btn"
                    disabled={this.state.disabled}
                    // onChange={this.handleDisabled}
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

export default StepOne;