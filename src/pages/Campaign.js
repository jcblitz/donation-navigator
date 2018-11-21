import React, { Component } from 'react';
import DonationAction from '../Components/DonationAction';
import SupportList from '../Components/SupportList';
import Constants from '../Components/Constants'

class Campaign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaign: {}
    }
  }

  addDonor = (itemId) => {
    const updatedState = Object.assign({}, this.state);
    const campaign = updatedState.campaign;
    const item = campaign.campaignItems.find(item => item.id === itemId);

    item.donors++;    

    fetch(Constants.api.campaign.put(1), {
        method: 'PUT',
        body: JSON.stringify(campaign),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
    }).then(results => {
        return results.json();
    }).then(data => {
        this.setState({campaign: data})        
    });  
  }

  componentDidMount() {
    fetch(Constants.api.campaign.get(1)).then(results => {
        return results.json();
    }).then(data => {
        this.setState({campaign: data})        
    });   
  }

  render() {
    return (
        <div className="container">
        <section className="jumbotron text-center">
            <DonationAction campaign={this.state.campaign} />
        </section>
          <div className="support-list">
            <SupportList addDonor={this.addDonor} campaign={this.state.campaign} />
          </div>
        </div>
    );
  }
}

export default Campaign;
