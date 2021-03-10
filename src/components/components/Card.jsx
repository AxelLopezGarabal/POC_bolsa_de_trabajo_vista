import React from 'react';
import { withRouter } from 'react-router';
import {Dropdown} from 'react-bootstrap';

import CardListJobShow from '../components/CardListJobShow';

class Card extends React.Component{
    

    longText(){
        let lines = this.props.content.details.split(/(.{120})/).filter(O=>O)
        let linesHTML  = lines.map((line, i)=><div key={i}>{line}</div>);
        return linesHTML;
    }

    render(){
        return (
            <React.Fragment>
            <li className="card" style={{listStyleType: "none", margin:"2%", backgroundColor: "rgba(145, 145, 145, 0.9)"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="row" style={{marginTop: "2%", marginLeft: "2%", marginRight:"2%"}}>
                    <div className="sm-2" align="rigth" style={{marginTop: "-0.5%"}}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{float: "left", marginTop:"-3%"}}/>
                                <Dropdown.Menu>
                                    <div align="left">
                                        <Dropdown.Item>
                                        <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td><b>{this.props.content.docType}</b></td>
                                                        <td>{this.props.content.docNro}</td>
                                                    </tr>
                                                    <tr>                                                        
                                                        <td><b>Fecha de nacimiento</b></td>
                                                        <td>{this.props.content.birthDate}</td>
                                                    </tr>
                                                    <tr>                                                        
                                                        <td><b>experiencias previas</b></td>
                                                        <td>{this.longText()}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-4" align="left">
                        <p>
                            <b>
                                {"Nombre y Apellido: "+ this.props.content.firstname +" "+ this.props.content.lastname}
                            </b>
                        </p>
                    </div>
                    <div className="col-sm" align="center">
                        <p>
                            <b>
                                {"E-mail: " + this.props.content.email}
                            </b>
                        </p>
                    </div>

                    <div className="col-sm" align="center">
                        <p>
                            <b>
                                {"Carrera: "+this.props.content.career}
                            </b>
                        </p>
                    </div>

                    <div className="col-sm" align="center" style={{marginTop:"-0.6%"}}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => {console.log("Aprobado")}}
                        >
                            Aprobar</button>
                    </div>
                </div>
            </li>
            </React.Fragment>
        )
    }
}

export default withRouter(Card);