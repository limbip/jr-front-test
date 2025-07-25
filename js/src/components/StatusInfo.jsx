import React from 'react';

const StatusInfo = ({ 
  category, 
  trafficLightStatus, 
  inputValue, 
  statusCodeMap 
}) => {
  return (
    <div className="status-info">
      {category !== 'invalid' ? (
        <div className="status-card">
          <h3>Status Information</h3>
          <p>
            <strong>Category:</strong> <span className={`status-${category}`}>{category}</span>
          </p>
          {inputValue && /^\d+$/.test(inputValue) && (
            <p><strong>Code:</strong> <span className={`status-${category}`}>{inputValue}</span></p>
          )}
          {inputValue && statusCodeMap[inputValue.toLowerCase()] && (
            <p><strong>Code:</strong> <span className={`status-${category}`}>{statusCodeMap[inputValue.toLowerCase()]}</span></p>
          )}
          {category === '2xx' && <p className="status-message">✓ Success! The request was successful.</p>}
          {category === '3xx' && <p className="status-message">↪ Redirection! Further action is needed.</p>}
          {category === '4xx' && <p className="status-message">✗ Client Error! The request contains bad syntax or cannot be fulfilled.</p>}
          {category === '5xx' && <p className="status-message">✗ Server Error! The server failed to fulfill a valid request.</p>}
        </div>
      ) : trafficLightStatus !== 'off' ? (
        <div className="status-card error">
          <h3>Invalid Input</h3>
          <p>The provided status code or name is not valid.</p>
          <p>Try entering a number between 100-599 or a valid status name.</p>
        </div>
      ) : null}
    </div>
  );
};

export default StatusInfo;
