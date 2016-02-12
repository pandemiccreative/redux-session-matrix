import React from 'react';
import Gridicon from './Gridicon';
import Checkbox from './Checkbox';

const SessionFilter = React.createClass({
  render: function(){
    return(
      <aside className="filter-sidebar">
        <header className="filter-header">
          <h3>Refine Your Sessions</h3>
          <h4 className={this.props.favSessionCount > 0 ? 'h4-active' : ''}>
            <span>{this.props.favSessionCount}</span>
            <Gridicon icon='star' size='20' />
          </h4>
          <label htmlFor="favorites filter">Favorites</label>
          <Checkbox className='favoritesCheck' value='favorites' name='favorites' />
        </header>
        <section className="filter-options">
          <h4>Job Role</h4>
          <label htmlFor="technician">Technician</label>
          <Checkbox className='technicianCheck' value='Technician' name='technician' /><br />
          <label htmlFor="opsManager">Ops Manager</label>
          <Checkbox className='opsManagerCheck' value='Ops Manager' name='opsManager' /><br />
          <label htmlFor="ownerExec">Owner/Exec</label>
          <Checkbox className='ownerExecCheck' value='Owner/Exec' name='ownerExec' />
        </section>
        <section className="filter-options">
          <h4>Level</h4>
          <label htmlFor="level101">101</label>
          <Checkbox className='level101Check' value='101' name='level101' /><br />
          <label htmlFor="level201">201</label>
          <Checkbox className='level201Check' value='201' name='level201' /><br />
          <label htmlFor="levelGeek">Geek</label>
          <Checkbox className='levelGeekCheck' value='Geek' name='levelGeek' />
        </section>
        <section className="filter-options">
          <h4>Rounds</h4>
          <label htmlFor="round1">Round 1</label>
          <Checkbox className='round1Check' value='Round 1' name='round1' /><br />
          <label htmlFor="round2">Round 2</label>
          <Checkbox className='round2Check' value='Round 2' name='round2' /><br />
          <label htmlFor="round3">Round 3</label>
          <Checkbox className='round3Check' value='Round 3' name='round3' />
        </section>
        <section className="filter-options">
          <h4>Type</h4>
          <label htmlFor="educationBreakout">Education Breakout</label>
          <Checkbox className='educationCheck' value='Education Breakout' name='educationBreakout' /><br />
          <label htmlFor="vendorBreakout">Vendor Breakout</label>
          <Checkbox className='vendorCheck' value='Vendor Breakout' name='vendorBreakout' /><br />
          <label htmlFor="handsOnLab">Hands-On Lab</label>
          <Checkbox className='labCheck' value='Hands-On Lab' name='handsOnLab' />
        </section>
        <section className="filter-options"></section>
      </aside>
    );
  }
});

export default SessionFilter;
