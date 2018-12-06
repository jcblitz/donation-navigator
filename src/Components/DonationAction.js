import React, { Component } from 'react';

class DonationAction extends Component {
  totalDonated = () => {
    if(this.props.campaign.id) {    
      return (this.props.campaign.campaignItems.reduce((sum, item) => sum + (item.donors ? item.donors.length : 0), 0));
    }
  }


  totalAmountDontated = () => {
    let total = 0  
    if(this.props.campaign.id) {
      this.props.campaign.campaignItems.forEach(item => {
        item.donors.forEach(donation => {
          total = donation.amount + total
        });
      });
    }
    return total;
  }

  render() {
    return (
        <div className="container">
          <h1 className="jumbotron-heading">Donation example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="/" className="btn btn-primary my-2 mr-2">Main call to action</a>
            <a href="/" className="btn btn-secondary my-2">Secondary action</a>
          </p>
            <h2>Total Pledges: {this.totalDonated()}  </h2>
            <h2>Total Pledged: {new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: 'USD' 
              }).format(this.totalAmountDontated())}
            </h2>
        </div>
    );
  }
}

export default DonationAction;
