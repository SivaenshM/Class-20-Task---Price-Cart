import React, { Component } from 'react'
import Benifits from './Benifits';

// Card Component to dispaly card styled with Boostrap
const Card = ({cardName,price}) => {
    // empty string created to pass in href attribute
    let URL = "";
  return (
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{cardName}</h5>
                <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                <hr style={{ background: 'black', color: 'black', borderColor: 'black', height: '1.5px', }} />
                <ul className="fa-ul">
                    {/* Benifits Component called */}
                    <Benifits cardName={cardName}/>
                </ul>
                <div className="d-grid">
                <a href={URL} className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card