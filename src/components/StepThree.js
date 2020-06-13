
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class StepThree extends Component {
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
                    <AppBar title="Seleziona un dettaglio della categoria principale" />
                    
                    <RaisedButton
                    label="MODA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="SPETTACOLO"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="SPORT"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="BENESSERE"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="MEDICO"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="SOCIAL NETWORK"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="CUCINA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="FOTOGRAFIA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="IMMOBILIARE"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="MANAGER"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="GIORNALISMO"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="ARTE"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="CULTURA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="TUIRISMO"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="START UP"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="MARKETING E COMUNICAZIONI"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="DOCENTE"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="SOCIOLOGIA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="FINANZA"
                    primary={true}
                    style={styles.button}
                    onClick={this.moveToOthersItems}
                    />
                    <RaisedButton
                    label="ARREDAMENTO E DESIGN"
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

export default StepThree;
