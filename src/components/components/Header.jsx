import React from 'react';
import {Dropdown} from 'react-bootstrap';

import userImg from '../img/user.png'

const stilo={
    margin: "2%", 
    opacity: ".9",
    zIndex: "1"
}

class Header extends React.Component{
    handleOnClickLogOut(){
        this.props.history.push('/')
    }
    
    render(){
        return(
            <React.Fragment>
                <div id="header" className="card" style={stilo}>
                    <div style={{marginTop: "1%", marginLeft: "2%", marginRight: "2%"}}>
                        <div className="row">
                            <div className="row">
                                <div className="col-sm" style={{paddingTop: "1%"}}>
                                    <h5> <b>Administracion de peticiones de aprobacion </b></h5>
                                </div>
                            </div>

                            <div className="col-sm" align="right" style={{paddingBottom: "1%"}}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <b>LogOut</b>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <div align="center">
                                        <Dropdown.Item>
                                            <img 
                                                src={userImg} 
                                                alt="logo"
                                                width="64px"
                                                height="64px"
                                                title="User Img"
                                            />
                                        </Dropdown.Item>
                                        
                                        <Dropdown.Item>
                                            <p> {this.props.user.email} </p>
                                        </Dropdown.Item>
                                        
                                        <Dropdown.Item>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => {this.handleOnClickLogOut()}}
                                            > 
                                                    <b>LogOut </b>
                                            </button>
                                        </Dropdown.Item>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default (Header);
