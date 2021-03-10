import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ErrorMessage from './ErrorMessage';

const stylo={
    marginBottom:"2%"
}

class RegisterFormEnterprise extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          error: props.error,
          email: "", 
          name: "", 
          CUIT: "", 
          phoneNro: "", 
          province: "",
          locality:"",
          direction: "",
        }
    }

    createRegister = () => {       
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
        if (this.state.name.length === 0){
            this.setState({ error: "debe completar el campo Nombre/s."});
          return;
        }
        if (this.state.CUIT.length === 0 || this.state.CUIT.length < 10){
            this.setState({ error: "debe introducir un CUIT valido."});
          return;
        }
        if (this.state.CUIT.length === 8){
            this.setState({ error: "debe introducir un numero telefonico valido."});
          return;
        }
        if (this.state.province.length === 0){
            this.setState({ error: "la provincia debe ser valida"});
          return;
        }
        if (this.state.locality.length === 0){
            this.setState({ error: "la localidad debe ser valido"});
          return;
        }
        if (this.state.direction.length === 0){
            this.setState({ error: "la direccion debe ser valido"});
          return;
        }
        this.props.register(this.state);
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
                <ErrorMessage error={this.state.error}/>
                <div className="card" align="center" style={{margin:"2%"}}>
                    <ErrorMessage error={this.state.error}/>
                    <form id="form_Register" style={{marginTop:"2%"}}>
                        <div className="form-group" style={{margin:"2%"}}>
                            <Container className="form-group">
                                <div style={stylo}>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        value={this.state.email}
                                        placeholder="E-mail"
                                        onChange={event => this.handleChange(event.target.value, 'email')}
                                    />
                                </div>

                                <Row style={stylo}>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            value={this.state.name}
                                            placeholder="Nombre"
                                            onChange={event => this.handleChange(event.target.value, 'name')}
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="CUIT"
                                            value={this.state.CUIT}
                                            placeholder="C.U.I.T"
                                            onChange={event => this.handleChange(event.target.value, 'CUIT')}
                                        />
                                    </Col>
                                </Row>
                                <Row style={stylo}>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            value={this.state.province}
                                            placeholder="Provincia"
                                            onChange={event => this.handleChange(event.target.value, 'province')}
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="CUIT"
                                            value={this.state.locality}
                                            placeholder="Localidad"
                                            onChange={event => this.handleChange(event.target.value, 'locality')}
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="CUIT"
                                            value={this.state.direction}
                                            placeholder="direccion"
                                            onChange={event => this.handleChange(event.target.value, 'direction')}
                                        />
                                    </Col>
                                </Row>

                                <div className="form-group" style={stylo}>
                                    <input
                                        className="form-control"
                                        type="number"
                                        id="phoneNro"
                                        value={this.state.phoneNro}
                                        placeholder="numero de telefono"
                                        onChange={event => this.handleChange(event.target.value, 'phoneNro')}
                                    />
                                </div>
                            </Container>
                        </div>

                            <div id="botons" className="row" style={{marginLeft: "75%", marginBottom:"2%"}}>
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
                                        Registrar y continuar
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default (RegisterFormEnterprise);