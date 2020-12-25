import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import { getLogs } from '../src/actions/logActions';

const Logs = ({ log: { logs}, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, [getLogs]);
  
  console.log(logs)
  if(logs === null){
    return <p className='center'>Empty Please Add...</p>
  }
  return (
    <div className="container">
     <ul className='collection with-header'>
           { logs !== null ? logs.map(log => (<LogItem log={log} key={log._id}/>)) : <p className='center'>Empty Please Add.....</p>}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
