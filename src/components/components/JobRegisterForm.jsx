import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ErrorMessage from './ErrorMessage';

const stylo={
    marginBottom:"2%"
}

class JobRegisterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          error: props.error,
          fromDate: "",
          toDate: "",
          details: ""    
        }
    }

    createRegister = () => {       
        if (this.state.fromDate.length === 0){
            this.setState({ error: "la fecha debe ser valido"});
          return;
        }
        if (this.state.fromDate.length === 0){
            this.setState({ error: "la fecha debe ser valido"});
          return;
        }
        console.log(this.state);
        //this.props.regInc(this.state);
        //this.props.history.push('/jobForm');
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
                                <Row style={stylo}>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="date"
                                            id="name"
                                            value={this.state.fromDate}
                                            placeholder="Desde el"
                                            onChange={event => this.handleChange(event.target.value, 'fromDate')}
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            className="form-control"
                                            type="date"
                                            id="CUIT"
                                            value={this.state.toDate}
                                            placeholder="hasta el"
                                            onChange={event => this.handleChange(event.target.value, 'toDate')}
                                        />
                                    </Col>
                                </Row>

                                <div className="form-group" style={stylo}>
                                <div align="left" className="form-group">
                                    <textarea 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"
                                        placeholder="Requerimientos"
                                        value={this.state.details}
                                        onChange={event => this.handleChange(event.target.value, 'details')}
                                    />
                                </div>
                                </div>
                            </Container>
                        </div>

                            <div id="botons" className="row" style={{marginLeft: "55%", marginBottom:"2%"}}>
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

                            <div id="resgisterButton" style={{marginRight: "3%"}}>
                                <button 
                                    className="btn btn-success"
                                    type="button" 
                                    id="register" 
                                    onClick={() => {this.createRegister()}}
                                >
                                    Registrar y finalizar
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

export default (JobRegisterForm);