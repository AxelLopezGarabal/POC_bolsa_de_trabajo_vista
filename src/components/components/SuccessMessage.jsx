import React from 'react';

const SuccessMessage = props => {
    return (
      props.success
        ? <div className="alert alert-success" role="alert">{props.success}</div>
        : null
    );
  }
export default SuccessMessage
