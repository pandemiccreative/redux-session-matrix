import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Round from './Round';

const RoundList = React.createClass({
  getRounds: function(){
    return this.props.rounds || [];
  },
  assignSessions: function(roundDay, roundStart, roundEnd){
    const sessions = _.chunk(this.props.sessions.toArray(), 10);
    const roundSessions = sessions[this.props.page].map((session) => {
      const startTime = session.get('StartRound').TimeSpan.split(' - ')[0];
      const endTime = session.get('EndRound').TimeSpan.split(' - ')[1];
      if((startTime === roundStart || endTime === roundEnd) && session.get('Day').DisplayName === roundDay) return session;
    });
    const finalSessions = roundSessions.filter(Boolean);
    return finalSessions;
  },
  render: function(){
    return(
      <div className="round-list">
        {this.getRounds().map((round) => {
          console.log(round.get('startTime'));
          if(this.assignSessions(round.get('day'), round.get('startTime'), round.get('endTime')).length > 0){
            return(
              <Round key={round.get('displayName')} round={round.get('displayName')} sessions={this.assignSessions(round.get('day'), round.get('startTime'), round.get('endTime'))} />
            );
          }
        })}
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    rounds: state.get('rounds'),
    page: state.get('page'),
    sessions: state.get('sessions')
  };
}

export const RoundListContainer = connect(mapStateToProps)(RoundList);
