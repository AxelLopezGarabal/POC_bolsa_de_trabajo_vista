import React from 'react';
import { withRouter } from 'react-router';

import CardList from '../components/CardList';
import HeaderC  from '../components/Header';

//import API from '../../servicio/api'
import CardJobList from '../components/CardListJob';

const s = {
    email: "ann@gmail.com", 
    firstname: "Ann", 
    lastname: "Hecate", 
    docType: "DNI", 
    docNro: "12345678",
    birthDate:"2021-03-08",
    career: "TPI",
    year:"3",
    details:"omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    isApproved: false
}

const s2 = {
    email: "johann@gmail.com", 
    firstname: "Johann", 
    lastname: "D'Arc", 
    docType: "CI", 
    docNro: "13645678",
    birthDate:"2021-08-08",
    career: "LI",
    year:"5",
    details:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ",
    isApproved: false
}

const e2 = {
    CUIT: "1244597890",
    details: " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    fromDate:"2020-03-09",
    toDate:"2020-04-09",
    isApproved: false
}

const e1 = {
    CUIT: "0192837456",
    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    fromDate:"2020-05-09",
    toDate:"2020-07-09",
    isApproved: false
}

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            studentsRequest:[s, s2],
            enterpriseRequest:[e1, e2]
        }
    }
    
    handleChange(value, prop) {
        this.setState(prevState => ({ ...prevState, [prop]: value }));
    }
    
    componentDidMount(){
        /*if(this.props.user !== undefined){
            const header = {
                auth: {
                    username: this.props.user.email,
                    password: this.props.user.password
                }
            }
            API.getAuth(`/account/${this.props.user.cvu}`, header)
                .then( res => {
                    this.handleChange(res.data.balance, 'amount')
                })
                .catch(error => console.log(error.response))
            
            API.getAuth(`/transactions/${this.props.user.cvu}`, header)
                .then(res => {
                    this.handleChange(res.data, 'transactionLS')
                })
                .catch(error => console.log(error.response))
        }
        else{
            this.props.history.push('/')
        }*/
    }
        
   render() {//<SuccessMessage success={this.state.success}/>
    return (
      <React.Fragment>

        <div className="container-fluid">

            <HeaderC {...this.props}/>

            <div id="history" className="card" style={{margin: "2%"}}>
                <div style={{margin: "2%"}}>
                    <h4><b>Peticiones de estudiantes a aprobar </b></h4>
                    <div className="card" style={{margin: "2%"}}>
                        <div style={{margin: "1%", marginBottom: "0%"}}>
                            <CardList contents={this.state.studentsRequest}/>
                        </div>
                    </div>
                </div>
                
                <div style={{margin: "2%"}}>
                    <h4><b>Peticiones de Empresas a aprobar </b></h4>
                    <div className="card" style={{margin: "2%"}}>
                        <div style={{margin: "1%", marginBottom: "0%"}}>
                            <CardJobList contents={this.state.enterpriseRequest}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  } 
}


export default withRouter(Home);
