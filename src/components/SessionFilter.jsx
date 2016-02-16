import React from 'react';
import { connect } from 'react-redux';
import Gridicon from './Gridicon';
import Checkbox from './Checkbox';

const SessionFilter = React.createClass({
  render: function(){
    return(
      <aside className="filter-sidebar">
        <header className="filter-header">
          <h3>Refine Your Sessions</h3>
          <h4 className={(this.props.favSessions.get(0) !== '') ? 'h4-active' : ''}>
            <span>{(this.props.favSessions.get(0) !== '') ? this.props.favSessions.count() : 0}</span>
            <Gridicon icon='star' size='20' />
          </h4>
          <label htmlFor="favorites filter">Favorites</label>
          <Checkbox className='favoritesCheck' value='favorites-favorites' name='favorites' toggle={this.props.toggleFilter} />
        </header>
        <section className="filter-options">
          <h4>Job Role</h4>
          <label htmlFor="technician">Technician</label>
          <Checkbox className='technicianCheck' value='role-Technician' name='technician' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="opsManager">Ops Manager</label>
          <Checkbox className='opsManagerCheck' value='role-Ops Manager' name='opsManager' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="ownerExec">Owner/Exec</label>
          <Checkbox className='ownerExecCheck' value='role-Owner/Exec' name='ownerExec' toggle={this.props.toggleFilter} />
        </section>
        <section className="filter-options">
          <h4>Level</h4>
          <label htmlFor="level101">101</label>
          <Checkbox className='level101Check' value='level-101' name='level101' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="level201">201</label>
          <Checkbox className='level201Check' value='level-201' name='level201' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="levelGeek">Geek</label>
          <Checkbox className='levelGeekCheck' value='level-Geek' name='levelGeek' toggle={this.props.toggleFilter} />
        </section>
        <section className="filter-options">
          <h4>Rounds</h4>
          <label htmlFor="round1">Round 1</label>
          <Checkbox className='round1Check' value='round-1' name='round1' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="round2">Round 2</label>
          <Checkbox className='round2Check' value='round-2' name='round2' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="round3">Round 3</label>
          <Checkbox className='round3Check' value='round-3' name='round3' toggle={this.props.toggleFilter} />
        </section>
        <section className="filter-options">
          <h4>Type</h4>
          <label htmlFor="educationBreakout">Education Breakout</label>
          <Checkbox className='educationCheck' value='type-Education Breakout' name='educationBreakout' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="vendorBreakout">Vendor Breakout</label>
          <Checkbox className='vendorCheck' value='type-Vendor Breakout' name='vendorBreakout' toggle={this.props.toggleFilter} /><br />
          <label htmlFor="handsOnLab">Hands-On Lab</label>
          <Checkbox className='labCheck' value='type-Hands-On Lab' name='handsOnLab' toggle={this.props.toggleFilter} />
        </section>
        <section className="filter-options"></section>
      </aside>
    );
  }
});

function mapStateToProps(state){
  return{
    filter: state.filter,
    favSessions: state.favSessions
  };
}

function mapDispatchToProps(dispatch){
  return{
    toggleFilter: (filter, checked) => {
      dispatch(
        {
          type: 'TOGGLE_FILTER',
          filter,
          checked
        }
      )
    }
  };
}

export const SessionFilterContainer = connect(mapStateToProps, mapDispatchToProps)(SessionFilter);
