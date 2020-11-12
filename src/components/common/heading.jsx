import React from 'react';

function Heading({ title, heading, className = "" }) {
    return (
        <div className={className}>
            <span style={{color: "#00c853", fontWeight: '400', fontSize: 18}}>{title}</span>
            <h1 className="font-weight-bold mt-3" style={{color: "#011840"}}>{heading}</h1>        
        </div>
    );
}

export default Heading;