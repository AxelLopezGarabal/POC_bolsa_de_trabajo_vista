import React from 'react';
import { withRouter } from 'react-router';

import ErrorMessage from './ErrorMessage';


class LogInForm extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            error: props.error,
            email: '', 
            password: ''};
    }

    handleChange(value, prop) {
        this.setState(prevState => ({ ...prevState, [prop]: value }));
        this.setState({error: undefined})
    }


    handleOnClickSingIn(){
        this.props.history.push('/register')
    }

    render(){
        return(
        <React.Fragment>
            <ErrorMessage error={this.state.error}/>
            <div align="rigth">
                <div className="input-group" style={{with: '45%'}}>
                    <input type="text" className="form-control" style={{marginRight: "1%"}} placeholder="Username"/>
                    <input type="text" className="form-control" style={{marginRight: "1%"}} placeholder="Password"/>
                    <button 
                        className="btn btn-primary"
                        type="button" 
                        id="LogIn" 
                        onClick={() => {this.props.login(this.state)}}>
                        <b>LogIn</b>
                    </button>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default withRouter(LogInForm);