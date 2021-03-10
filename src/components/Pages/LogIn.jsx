import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

import LogInForm from '../components/LogInForm';

import API from '../../servicio/api'
import { Row, Col, Container } from 'react-bootstrap';
import StudentCard from '../components/Student';
import Enterprise from '../components/Enterprise';

Modal.setAppElement('body');

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.formComponent(),
      student: this.studentCard(),
      enterprise: this.enterpriseCard()
    };
  }

  formComponent= (error)=><LogInForm error={error} login={this.doLogIn} {...this.props}/>
  studentCard  = (error)=><StudentCard error={error} regStd={this.registerStudent} listStd={this.listStudent} {...this.props}/>
  enterpriseCard=(error)=><Enterprise error={error} regInc={this.registerEnterprise} listInc={this.listEnterprise} {...this.props}/>
  
  doLogIn = ({email, password}) => {
    this.props.history.push('/home');
    /*API.post('admin/admin.php', {email: email, password: password})
    .then(response => {
        console.log(response);
        let res = response.data
        res.password = password
        this.props.history.push('/home', {email:"admin@gmail.com", password:"1234"});
    })
    .catch(error => {
      console.log(error)
    })*/
    
  }

  registerStudent = () => {
    this.props.history.push('/registerStudent');
  }

  listStudent = () => {
    this.props.history.push('/students');
  }

  registerEnterprise = () => {
    this.props.history.push('/registerEnterprise');
  }

  listEnterprise = () => {
    this.props.history.push('/enterprises');
  }
  
  
  render() {
    return (
      <React.Fragment>
        <div>
            <Container style={{maxWidth: "100%", marginTop:"1%"}}>
              <Row>
                <Col xs={12} md={8}>
                </Col>

                <Col xs={6} md={4}  style={{marginTop:"0.65%"}}>
                  {this.state.form}
                </Col>
              </Row>
            </Container>
            <div className="card" style={{margin: "1.1%", marginTop:"2%", paddingTop: "1%"}}>
              <h1 className="text-center"> <b>Bolsa de Trabajo Universitaria</b></h1>
              <Container style={{maxWidth: "100%", marginTop:"1%"}}>
                <Row style={{padding:"1.1%"}}>
                  <Col className="card" style={{marginRigth:"1%"}}>
                    {this.state.student}
                  </Col>

                  <Col className="card" style={{marginLeft:"1%"}}>
                    {this.state.enterprise}
                  </Col>
                </Row>
              </Container>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(LogIn);
