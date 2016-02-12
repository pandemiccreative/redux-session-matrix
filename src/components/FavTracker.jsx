import React from 'react';
import { connect } from 'react-redux';

const FavTracker = React.createClass({
  render: function(){
    return(
      <div style={{height:40}}>
        <p>Currently Faved Sessions</p>
        <ul className="favedSessions">{this.props.favSessions.map(entry =>
          <li key={entry}>{entry}</li>
        )}</ul>
      </div>
    );
  }
});

function mapStateToProps(state){
  return {
    favSessions: state.favSessions
  };
}

export const FavTrackerContainer = connect(mapStateToProps)(FavTracker);
