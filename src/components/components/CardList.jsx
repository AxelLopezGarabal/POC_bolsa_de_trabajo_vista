import React from 'react';
import { withRouter } from 'react-router';

import Card from './Card';

class CardList extends React.Component{
    render(){
        return(
            <React.Fragment>
                    {this.props.contents.map(
                        (elem, i) => (
                            <Card
                                content={elem}
                                key={i}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withRouter(CardList);