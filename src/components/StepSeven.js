
import React, {Component,  Fragment} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import "./index.css";

class StepEight extends Component {

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

    render() {
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>

                <Fragment>
                    <AppBar title="Grazie per tutto questionnnario" />

                    <List>
                        <ListItem
                         primaryText="QUESTIONNARIO"
                        />
                        <ListItem
                         primaryText="OPZIONE CATEGORIA"
                        />
                        <ListItem
                         primaryText="MODA"
                        />
                        <ListItem
                         primaryText="FOTOMODELLA"
                        />
                        <ListItem
                         primaryText="FOTOMODELLA CLASSICA"
                        />
                        <ListItem
                         primaryText="FOTOMODELLA LOOK BOOK"
                        />
                    </List>


                    <br />
                    {/* <RaisedButton
                    label="Continue"
                    secondary={true}
                    style={styles.button}
                    onClick={this.continue}
                    /> */}
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

export default StepEight;
