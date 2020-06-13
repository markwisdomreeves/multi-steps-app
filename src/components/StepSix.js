
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
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
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar title="Select a Fotomodella Item Detail" />

                    <RaisedButton
                    label="FOTOMODELLA ABITO CERIMONIA"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA LOOK BOOK"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA RITRATTO"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA IMMAGINE"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA FASHION"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA MET ART"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA BEAUTY"
                    primary={true}
                    style={styles.button}
                    />
                    <RaisedButton
                    label="FOTOMODELLA HOTESS"
                    primary={true}
                    style={styles.button}
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