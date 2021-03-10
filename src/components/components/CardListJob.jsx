import React from 'react';
import { withRouter } from 'react-router';

import CardJob from './CardJob';


class CardListJob extends React.Component{
    render(){
        return(
            <React.Fragment>
                    {this.props.contents.map(
                        (elem, i) => (
                            <CardJob
                                content={elem}
                                key={i}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withRouter(CardListJob);
