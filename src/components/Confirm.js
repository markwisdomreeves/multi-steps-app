
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Comfirm extends Component {
    /* this is the continue method to allow the 
    user to contintue clicking the button */
    continue = e => {
        e.preventDefault();

        // HERE IS WHERE YOU CAN PROCESS THE FORM DATA TO ANY DATABASE

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
        const { values: { 
                firstName,
                middleName, 
                lastName, 
                email, 
                occupation, 
                city, 
                bio } } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Comfirm Your Data" />
                    <List>
                        <ListItem
                         primaryText="First Name"
                         secondaryText={firstName}
                        />
                        <ListItem
                         primaryText="Last Name"
                         secondaryText={lastName}
                        />
                        <ListItem
                         primaryText="Middle Name"
                         secondaryText={middleName}
                        />
                        <ListItem
                         primaryText="Email"
                         secondaryText={email}
                        />
                        <ListItem
                         primaryText="Occupation"
                         secondaryText={occupation}
                        />
                        <ListItem
                         primaryText="City"
                         secondaryText={city}
                        />
                        <ListItem
                         primaryText="bio"
                         secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
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

export default Comfirm;