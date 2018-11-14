import React, { Component } from 'react';
import SupportItem from "./SupportItem"

class SupportList extends Component {
   render() {
       let listItemsComponents = null;
       if (this.props.campaign.campaignItems) {
        listItemsComponents = this.props.campaign.campaignItems.map((item) =>
          <SupportItem addDonor={() => this.props.addDonor(item.id)} key={item.id} item={item} />
        );
       }
    
    return (
        <div className="row">
            {listItemsComponents}
        </div>
    );
  }
}

export default SupportList;
