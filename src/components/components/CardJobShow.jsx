import React from 'react';
import { withRouter } from 'react-router';


class CardJobShow extends React.Component{

    longText(){
        let lines = this.props.content.details.split(/(.{100})/).filter(O=>O)
        let linesHTML  = lines.map((elem, i) => (<div key={i}>{elem}</div>));
        return linesHTML;
    }

    render(){
        return (
            <React.Fragment>
            <div className="row" style={{marginTop: "2%", marginLeft: "2%", marginRight:"2%"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">CUIT</th>
                            <th scope="col">Desde el </th>
                            <th scope="col">Hasta el </th>
                            <th scope="col">Detalles </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.content.CUIT}</td>
                            <td>{this.props.content.fromDate}</td>
                            <td>{this.props.content.toDate}</td>
                            <td>{this.longText()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(CardJobShow);
