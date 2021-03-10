import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

import JobRegisterForm from '../components/JobRegisterForm';
import API from '../../servicio/api'

  
Modal.setAppElement('body');


class JobRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            registerForm: this.formComponent()
        }
    }

    formComponent = (error) => <JobRegisterForm error={error} register={this.doRegister} {...this.props}/>

    handleOnClickBackToLogIn(){
        this.props.history.push('/')
    }

    doRegister= ({idCard, firtsname, lastname, email, password}) => {
        console.log(this.props.enterprise.CUIT)
        API.post('/register', {
            idCard: idCard,
            firstName: firtsname,
            lastName: lastname,
            email: email,
            password: password
        }).then(res => {console.log(res); this.props.history.push('/')})
        .catch(err => 
            {
                this.setState({
                    formTransfer: this.formComponent("Ups! Pasaron cosas...")
                })
            })
    }
    
    render(){
        return(
            <React.Fragment>
            <div align="center">
                <div className="card" style={{margin:"2%"}}>
                    <h1><b>Bolsa de trabajo universitaria</b></h1>
                    <h5><b>Registro de ofertas</b></h5>
                </div>
            </div>
            {this.state.registerForm}
            </React.Fragment>
        )
    }
}

export default withRouter(JobRegister);
