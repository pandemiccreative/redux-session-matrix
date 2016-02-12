import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Round from './Round';

const RoundList = React.createClass({
  getRounds: function(){
    return this.props.rounds || List([]);
  },
  assignSessions: function(day, start, end){
    const sessions = this.props.sessions.slice((this.props.page * 10), (this.props.page * 10) + 10);
    const rSessions = sessions.map((session) => {
      const sStart = session.get('StartRound').TimeSpan.split(' - ')[0];
      const sEnd = session.get('EndRound').TimeSpan.split(' - ')[1];
      const sDay = session.get('Day').DisplayName;

      if((sStart === start || sEnd === end) && sDay === day){
        return session;
      }
    }).filter((val) => !(val === undefined));
    return rSessions;
  },
  render: function(){
    return(
      <div className="round-list">
        {this.getRounds().map((round) => {
          const rSessions = this.assignSessions(round.get('day'), round.get('startTime'), round.get('endTime'));
          if(rSessions.size > 0){
            return(
              <Round key={round.get('displayName')}
                     round={round.get('displayName')}
                     sessions={rSessions} />
            );
          }
        })}
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    rounds: state.rounds,
    page: state.page,
    sessions: state.sessions
  };
}

export const RoundListContainer = connect(mapStateToProps)(RoundList);
