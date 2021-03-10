import React from 'react';
import { withRouter } from 'react-router';
import {Dropdown} from 'react-bootstrap';

import CardListJobShow from '../components/CardListJobShow';

class CardEnterprise extends React.Component{
    

    longText(){
        let lines = this.props.content.details.split(/(.{120})/).filter(O=>O)
        let linesHTML  = lines.map((line)=><div>{line}</div>);
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
                                            <CardListJobShow contents={this.props.content.jobs}/>
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-4" align="left">
                        <p>
                            <b>
                                {"Nombre: "+ this.props.content.name}
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
                                {"Direccion: "+this.props.content.direction+" ("+ this.props.content.locality+", "+this.props.content.province+")"}
                            </b>
                        </p>
                    </div>
                </div>
            </li>
            </React.Fragment>
        )
    }
}

export default withRouter(CardEnterprise);