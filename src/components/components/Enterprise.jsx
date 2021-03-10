import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

import { Row, Col, Container } from 'react-bootstrap';

Modal.setAppElement('body');

class EnterpriseCard extends React.Component{
    constructor(props) {
        super(props);
        this.state ={}
    }

    render(){
        return (
            <React.Fragment>
                <div style={{margin:"0.5%", marginTop: "2.5%"}}>
                      <h4> Empresas </h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
                      </p>

                      <div id="buttons" style={{margin: "2%", marginTop: "5%"}}>
                        <Container>
                          <Row>
                              <Col>
                                <button className="btn btn-primary"
                                        type="button" 
                                        id="regInc" 
                                        onClick={() => {this.props.regInc()}}>
                                          <b>Registrate</b>
                                </button>
                              </Col>

                              <Col>
                                <button className="btn btn-primary"
                                        type="button" 
                                        id="listInc" 
                                        onClick={() => {this.props.listInc()}}>
                                          <b>Ve los trabajos ofertados</b>
                                </button>
                              </Col>
                          </Row>
                        </Container>
                      </div>
                    </div>
          </React.Fragment>
        );
    }
}

export default withRouter(EnterpriseCard);