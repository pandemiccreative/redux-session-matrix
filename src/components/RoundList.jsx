import React from 'react';
import Round from './Round';

const RoundList = React.createClass({
  getRounds: function(){
    return this.props.rounds || [];
  },
  assignSessions: function(roundDay, roundStart, roundEnd){
    const roundSessions = this.props.sessions.map((session) => {
      const startTime = session.StartRound.TimeSpan.split(' - ')[0];
      const endTime = session.EndRound.TimeSpan.split(' - ')[1];
      if((startTime === roundStart || endTime === roundEnd) && session.Day.DisplayName === roundDay) return session;
    });
    const finalSessions = roundSessions.filter(Boolean);
    return finalSessions;
  },
  render: function(){
    return(
      <div className="round-list">
        {this.getRounds().map((round) => {
          if(this.assignSessions(round.day, round.startTime, round.endTime).length > 0){
            return(
              <Round key={round.displayName} round={round.displayName} sessions={this.assignSessions(round.day, round.startTime, round.endTime)} />
            );
          }
        })}
      </div>
    );
  }
});

export default RoundList;
