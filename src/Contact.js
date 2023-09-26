import React from 'react';

export default function Contact() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ maxWidth: '18rem',height:'18rem' }}>
        <div className="card-body text-center">
          <h3 className="card-title">Contact Me</h3>
          <hr />
          <p className="card-text">Name: Ayush Duggal</p>
          <hr />
          <p className="card-text">Contact: +91 9718200286</p>
          <hr />
          <p className="card-text">Email: ayushduggal242@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
