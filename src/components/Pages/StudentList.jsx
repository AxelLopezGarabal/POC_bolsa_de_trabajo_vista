import React from 'react';
import { withRouter } from 'react-router';
import CardListStudent from '../components/CardListStudent';

class StudentList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            students:[
                {
                    email: "ann@gmail.com", 
                    firstname: "Ann", 
                    lastname: "Hecate", 
                    docType: "DNI", 
                    docNro: "12345678",
                    birthDate:"2021-03-08",
                    career: "TPI",
                    year:"3",
                    details:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex",
                    isApproved: true
                },
                {
                    email: "johann@gmail.com", 
                    firstname: "Johann", 
                    lastname: "D'Arc", 
                    docType: "CI", 
                    docNro: "13645678",
                    birthDate:"2021-08-08",
                    career: "LI",
                    year:"5",
                    details:"!?",
                    isApproved: true
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
                                <h2><b>Listado de Estudiantes Capasitados</b></h2>
                            </div>
                        </div>
                    </div>

                    <div style={{margin: "2%"}}>
                        <div className="card" style={{margin: "2%"}}>
                            <div style={{margin: "1%", marginBottom: "0%"}}>
                                <CardListStudent contents={this.state.students}/>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(StudentList);