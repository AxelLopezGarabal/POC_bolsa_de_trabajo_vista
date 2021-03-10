import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import RegisterEnterprise from './Pages/RegisterEnterprise.jsx';
import JobRegister from './Pages/JobRegister';

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import StudentList from './Pages/StudentList.jsx';
import EnterpriseList from './Pages/EnterpriseList.jsx';


export default class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render=
                        {props => <Home user={ props.location.state } />} 
                    />
                    
                    <Route path="/students" render=
                        {props => <StudentList {...props} />} 
                    />

                    <Route path="/enterprises" render=
                        {props => <EnterpriseList {...props} />} 
                    />

                    <Route path="/registerEnterprise" render=
                        {props => <RegisterEnterprise {...props} />} 
                    />

                    <Route path="/registerJob" render=
                        {props => <JobRegister enterprise={ props.location.state }/>} 
                    />

                    <Route path="/registerStudent" render=
                        {props => <Register {...props} />} 
                    />

                    <Route path="/" render=
                        {props => <LogIn {...props} />} 
                    />
                                        
                </Switch>
            </BrowserRouter>
        )
    }
        
}
