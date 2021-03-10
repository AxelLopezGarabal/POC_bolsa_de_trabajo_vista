import React from 'react';
import { withRouter } from 'react-router';

import CardListEnterprise from '../components/CardListEnterprise';

class EnterpriseList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            enterprises:[
                {
                    CUIT: "1234566890",
                    email: "p@gmail.com", 
                    name: "M.O. omnibus Primera Junta SA", 
                    province: "BSAS",
                    locality: "Quilmes",
                    direction:"entre x e y",
                    phoneNro:"24535363",
                    jobs:[
                        {
                            CUIT: "1234566890",
                            details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ",
                            fromDate:"2020-03-09",
                            toDate:"2020-04-09",
                            isApproved: false
                        },
                        {
                            CUIT: "1234566890",
                            details: "??",
                            fromDate:"2020-05-09",
                            toDate:"2020-07-09",
                            isApproved: false
                        }
                    ]
                },
                {
                    CUIT: "1602938475",
                    email: "x@gmail.com", 
                    name: "X SRL", 
                    province: "Cordoba",
                    locality: "Cosquín",
                    direction:"enter z y x",
                    phoneNro:"45464645",
                    jobs: [
                        {
                            CUIT: "1602938475",
                            details: "??",
                            fromDate:"2020-05-09",
                            toDate:"2020-07-09",
                            isApproved: false
                        }
                    ]
                }
            ]
        }
    }

    handleOnClickBack(){
        this.props.history.push('/');
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    <div className="card" align="center" style={{margin: "4%"}}>
                        <div className="row" style={{marginTop: "1%", marginRight:"2%"}}>
                            <div className="col-sm" style={{float:"left", marginLeft:"-25%"}}>
                                <button 
                                className="btn btn-primary"
                                type="button" 
                                id="back" 
                                onClick={()=> {this.handleOnClickBack()}}
                                >
                                    volver
                                </button>
                            </div>
                            <div className="col-md" style={{marginLeft:"-35%"}}>
                                <h2><b>Listado de Empresas que ofertan trabajo</b></h2>
                            </div>
                        </div>
                    </div>

                    <div style={{margin: "2%"}}>
                        <div className="card" style={{margin: "2%"}}>
                            <div style={{margin: "1%", marginBottom: "0%"}}>
                                <CardListEnterprise contents={this.state.enterprises}/>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(EnterpriseList);