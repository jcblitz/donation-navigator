import React, { Component } from 'react';
import './SupportItem.css';

class SupportItem extends Component { 
  render() {
    let item = this.props.item;
    let donorCount = item.donors ? item.donors.length : 0
    return (
        <div className="col-md-4">
        <div className="card mb-4 shadow-sm">          
          <img src={'./images/helmets.png'} alt="Stock" className="img-responsive hero-image"/>
          <div className="card-body">
            <p className="card-text">{item.description}</p>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                <button type="button" onClick={() => this.props.addDonor(item.id)} className="btn btn-sm btn-outline-secondary">Add Pledge</button>
              </div>
              <small className="text-muted">{donorCount} pledges</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupportItem;
