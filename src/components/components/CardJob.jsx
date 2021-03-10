import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';


class CardJob extends React.Component{

    longText(){
        let lines = this.props.content.details.split(/(.{120})/).filter(O=>O)
        let linesHTML  = lines.map((line, i)=><div key={i}>{line}</div>);
        return linesHTML;
    }

    render(){
        return (
            <React.Fragment>
            <li className="card" style={{listStyleType: "none", margin:"2%", backgroundColor: "rgba(145, 145, 145, 0.9)"}}>
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
                                                        <td><b>requerimientos</b></td>
                                                        <td>{this.longText()}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="col-sm" align="left">
                        <p><b>{"CUIT: "+this.props.content.CUIT}</b></p>
                    </div>
                    <div className="col-sm" align="center">
                        <p><b>{"Desde el "+this.props.content.fromDate}</b></p>
                    </div>
                    <div className="col-sm" align="center">
                        <p><b>{"Hasta el "+this.props.content.toDate}</b></p>
                    </div>
                    <div className="col-sm" align= "right" style={{marginTop:"-0.6%"}}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => {console.log("Aprobado")}}
                        >Aprobar</button>
                    </div>
                </div>
            </li>
            </React.Fragment>
        )
    }
}

export default withRouter(CardJob);
