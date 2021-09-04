import React from 'react';

const List = props => {
    return (
        
        <div className="row">
        {/* Single Pricing Table */}
        <div className="col-lg-6">
          <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="pricing-plan-title">
              <div className="pricing-table-icon" style={{backgroundImage: 'url(assets/img/pricing/pricing-table-blob.svg)'}}>
                <h5 className="plan-title bg-burning-orange-gradient">List of Players</h5>
                <img src="assets/img/pricing/pricing-table-icon.png" alt="pricing plan icon one" />
              </div>

            </div>
            <div className="pricing-plan-features">
              <ul>
              {props.listOfPlayers.length === 0 ?
               <li className="plan-feature">No Players have played</li>
               :
               props.listOfPlayers.map((player, index)=>{
                return <li key={index} className="plan-feature">{player}</li>
               })
              }
              </ul>
            </div>

          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="pricing-plan-title">
              <div className="pricing-table-icon" style={{backgroundImage: 'url(assets/img/pricing/pricing-table-blob.svg)'}}>
                <h5 className="plan-title bg-burning-orange-gradient">List of Winners</h5>
                <img src="assets/img/pricing/pricing-table-icon.png" alt="pricing plan icon one" />
              </div>

            </div>
            <div className="pricing-plan-features">
              <ul>
              {props.listOfWinners.length === 0 ?
               <li className="plan-feature">No Winners yet...</li>
               :
               props.listOfWinners.map((player, index)=>{
                return <li key={index} className="plan-feature">{player}</li>
               })
              }
              </ul>
            </div>

          </div>
        </div>
      </div>
       
    );
}

export default List;