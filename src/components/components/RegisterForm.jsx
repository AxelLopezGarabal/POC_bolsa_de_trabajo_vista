import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ErrorMessage from './ErrorMessage';



class RegisterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          error: props.error,
          email: "", 
          firtsname: "", 
          lastname: "", 
          docType: "", 
          docNro: "",
          birthDate:"",
          career: "",
          year:"",
          details:""
        }
    }

    createRegister = () => {       
        if (this.state.firtsname.length === 0){
            this.setState({ error: "debe completar el campo Nombre/s."});
          return;
        }
        if (this.state.lastname.length === 0){
            this.setState({ error: "debe completar el campo Apellido/s."});
          return;
        }
        if (this.state.email.length === 0){
            this.setState({ error: "debe completar el campo email."});
            return;
        }
        if (!this.state.email.includes('@gmail.com') &&
            !this.state.email.includes('@outlook.com') &&
            !this.state.email.includes('@admin.com')){
            this.setState({ error: "el campo email debe contener un email valido"});
            return;
        }
        console.log(this.state);
        //(this.props.register(this.state))
    }

    handleOnClickCancel(){
        this.props.history.push('/')
    }
    
    handleChange(value, prop){
        this.setState(prevState => ({ ...prevState, [prop]: value }))
        this.setState({error: undefined})
    }

    yourChangeHandler(event){
        const e = event.target.value;
        this.handleChange(e, 'docType');
    }

    render(){
        return(
            <React.Fragment>
                <div className="card" align="center" style={{margin:"2%"}}>
                    <ErrorMessage error={this.state.error}/>
                    <form id="form_Register" style={{marginTop:"2%"}}>
                        <Container>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="firtsname"
                                                value={this.state.firtsname}
                                                placeholder="Nombre/s"
                                                onChange={event => this.handleChange(event.target.value, 'firtsname')}
                                            />
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="lastname"
                                                value={this.state.lastname}
                                                placeholder="Apellido/s"
                                                onChange={event => this.handleChange(event.target.value, 'lastname')}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        value={this.state.email}
                                        placeholder="E-mail"
                                        onChange={event => this.handleChange(event.target.value, 'email')}
                                    />
                                </div>

                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" onChange={this.yourChangeHandler.bind(this)}>
                                                <option 
                                                    value="" 
                                                >
                                                        Tipo de documento
                                                </option>
                                                <option 
                                                    value="DNI"
                                                >
                                                        DNI
                                                </option>
                                                <option 
                                                    value="CI"
                                                >
                                                        CI
                                                </option>
                                            </select>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="docNro"
                                                value={this.state.docNro}
                                                placeholder="Numero de documento"
                                                onChange={event => this.handleChange(event.target.value, 'docNro')}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="birthDate"
                                        value={this.state.birthDate}
                                        placeholder="Fecha de nacimiento"
                                        onChange={event => this.handleChange(event.target.value, 'birthDate')}
                                    />
                                </div>

                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="career"
                                                value={this.state.career}
                                                placeholder="Carrera"
                                                onChange={event => this.handleChange(event.target.value, 'career')}
                                            />
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="year"
                                                value={this.state.year}
                                                placeholder="Años"
                                                onChange={event => this.handleChange(event.target.value, 'year')}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div align="left" className="form-group">
                                    <textarea 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"
                                        placeholder="Experiencia/s adicionales"
                                        value={this.state.details}
                                        onChange={event => this.handleChange(event.target.value, 'details')}
                                    />
                                </div>
                            </Container>

                            <div id="botons" className="row" style={{marginLeft: "75%"}}>
                                <div id="backButton" style={{marginRight: "3%"}}>
                                    <button 
                                        className="btn btn-danger"
                                        type="button" 
                                        id="back" 
                                        onClick={()=> {this.handleOnClickCancel()}}
                                    >
                                        Cancelar
                                    </button>
                                </div>

                                <div id="resgisterButton">
                                    <button 
                                        className="btn btn-success"
                                        type="button" 
                                        id="register" 
                                        onClick={() => {this.createRegister()}}
                                    >
                                        Register
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default (RegisterForm);
