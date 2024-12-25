import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

export function Details() {
  return (
    <div className="container">
      <div className="wrapper">
        <p>DETAILS</p>
        <h1 className="title-404">DETAILS</h1>
        <Link to="/">
          <button className="btn-404">Go Home</button>
        </Link>
      </div>
    </div>
  );
}
