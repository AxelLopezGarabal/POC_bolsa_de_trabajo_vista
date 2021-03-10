import React from 'react';
import { withRouter } from 'react-router';

import CardEnterprise from './CardEnterprise'

class CardListEnterprise extends React.Component{
    render(){
        return(
            <React.Fragment>
                    {this.props.contents.map(
                        (elem, i) => (
                            <CardEnterprise
                                content={elem}
                                key={i}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withRouter(CardListEnterprise);
