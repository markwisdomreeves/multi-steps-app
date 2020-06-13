
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
    moveToOthersItems = e => {
        e.preventDefault()
        this.props.buttonContinue();
    }
    

    render() {
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar title="Seleziona un dettaglio Fotomodella" />
                    
                    <RaisedButton
                    label="FOTOMODELLA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />

                    <br />
                    <RaisedButton
                    label="Back"
                    secondary={true}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton
                    label="Continue"
                    primary={false}
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
