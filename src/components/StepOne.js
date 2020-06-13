
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import "./index.css";

class StepOne extends Component {

    state = {
        disabled: true
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

    moveToOthersItems = e => {
        e.preventDefault()
        this.props.buttonContinue();
    }

    render() {
        const { buttonContinue } = this.props;
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar 
                    title="Seleziona un dettaglio Questionnario" 
                    className="text-header-font-size" />

                    <RaisedButton
                    label="QUESTIONNARIO"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    // disabled={!this.disabled ? 'disabled' : 'enbled'}
                    />
                    <br />
                    <RaisedButton
                    label="BIOGRAFIA"
                    disabled
                    primary={true}
                    style={styles.button}
                    />
                     <br />
                    <RaisedButton
                    label="COMUNICATO STAMPA"
                    disabled
                    primary={true}
                    style={styles.button}
                    />
                     <br />
                    <RaisedButton
                    label="INTERVISTE"
                    disabled
                    primary={true}
                    style={styles.button}
                    />


                    <br />
                    <RaisedButton
                    label="Continue"
                    secondary={true}
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


export default StepOne;
