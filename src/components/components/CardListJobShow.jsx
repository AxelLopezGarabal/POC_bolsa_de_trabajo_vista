import React from 'react';
import { withRouter } from 'react-router';

import CardJobShow from './CardJobShow';


class CardListJobShow extends React.Component{
    render(){
        return(
            <React.Fragment>
                    {this.props.contents.map(
                        (elem, i) => (
                            <CardJobShow
                                content={elem}
                                key={i}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withRouter(CardListJobShow);