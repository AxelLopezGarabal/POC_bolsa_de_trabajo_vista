import React from 'react';
import { withRouter } from 'react-router';

import CardStudent from './CardStudent'

class CardListStudent extends React.Component{
    render(){
        return(
            <React.Fragment>
                    {this.props.contents.map(
                        (elem, i) => (
                            <CardStudent
                                content={elem}
                                key={i}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withRouter(CardListStudent);
