
import React, { Component } from 'react';
// import FromUserDetails from "./FormUserDetails";
// import FormPersonalDetails from './FormPersonalDetails';
// import Comfirm from "./Confirm";
// import Success from "./Success";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
// import StepSeven from "./StepSeven";
import StepEight from './StepEight';


class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // Proceed to next step method
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Go back to previous step method
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    buttonContinue = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    
    // Handle fields change method
    // handleChange = input => e => {
    //     this.setState({
    //         [input]: e.target.value
    //     });
    // }

    render() {
        // getting and deconstructing the data from the state
        let { step } = this.state;
        // let { firstName, lastName, email, occupation, city, bio } = this.state;
        // storing all state data in one variable to passed the around, the value variable
        // let values = { firstName, lastName, email, occupation, city, bio } = this.state;
        
        // using a Switch statement here
        switch(step) {
            case 1:
                return (
                    <StepOne
                        nextStep={this.nextStep}
                        buttonContinue={this.buttonContinue}
                        // handleChange={this.handleChange}
                        // values={values}
                    />
                )
            case 2:
                return (
                    <StepTwo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        buttonContinue={this.buttonContinue}
                        // handleChange={this.handleChange}
                        // values={values}
                    />
                )
            case 3:
                return (
                    <StepThree
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        buttonContinue={this.buttonContinue}
                        // values={values}
                    />
                )
                case 4:
                return (
                    <StepFour
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        buttonContinue={this.buttonContinue}
                        // values={values}
                    />
                )
                case 5:
                return (
                    <StepFive
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        buttonContinue={this.buttonContinue}
                        // values={values}
                    />
                )
                case 6:
                return (
                    <StepSix
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        buttonContinue={this.buttonContinue}
                        // values={values}
                    />
                )
                // case 7:
                // return (
                //     <StepSeven
                //         nextStep={this.nextStep}
                //         prevStep={this.prevStep}
                //         // values={values}
                //     />
                // )
                // case 7:
                // return (
                //     <StepEight
                //         nextStep={this.nextStep}
                //         prevStep={this.prevStep}
                //         values={values}
                //     />
                // )
                // )
                case 7:
                return (
                    <StepEight
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        // values={values}
                    />
                )
            // case 9: 
            //     return (
            //         <Success />   
            //     )
            default: 
                return (
                    <h1>End of Questionnario</h1>
            ) 
        }
    }
}


export default UserForm;
