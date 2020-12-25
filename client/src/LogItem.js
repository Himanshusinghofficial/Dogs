import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  const arr=["year","Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  let date=log.date.split("T")[0];
  let val1=date.split("-")[0];
  let val2=date.split("-")[1];
  let val3=date.split("-")[2];
  let month=arr[val2];
  return (
    <li className='collection-item'>
      <div className="row" style={{marginBottom:'0px'}}>
        <div className="col s6 m6 center-align">
        <img src={log.dogimg} className="imgsmall" alt="dogimages"></img>
        </div>
        <div className="col s6 m6 center-align">
        <h5 style={{marginTop:'6px'}}><b>{log.name}</b></h5>
        <h6>Petted On</h6>
        <h6>{val3}th {month} {val1}</h6>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(
  null,
  {}
)(LogItem);
