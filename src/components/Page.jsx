import React from 'react';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import _ from 'lodash';
import { RoundListContainer } from './RoundList';
import { SessionListContainer } from './SessionList';
import Pagination from './Pagination';

const Page = React.createClass({
  componentWillMount: function(){
    this.props.setFavs();
  },
  removeDupes: function(list){
    const map = list.toMap();
    return map.mapEntries(([k, v]) => [k = v, v]).toList();
  },
  filterFavs: function(){
    return this.props.sessions.filter((session) => session.get('faved'));
  },
  filterLevels: function(levels){
    const sessions = this.props.sessions;
    return levels.map((level) => {
      return sessions.filter((session) => {
        return session.get('SessionLevels').map((sLevel) => {
          return sLevel.DisplayName === level;
        }).includes(true)
      })
    }).flatten(true)
      .toMap()
      .mapEntries(([k, v]) => [k = v.get('id'), v])
      .toList();
  },
  filterType: function(types){
    const sessions = this.props.sessions;
    return types.map((type) => {
      return sessions.filter((session) => {
        return session.get('Type').DisplayName === type;
      })
    }).flatten(true)
      .toMap()
      .mapEntries(([k, v]) => [k = v.get('id'), v])
      .toList();
  },
  filterRounds: function(rounds){
    const sessions = this.props.sessions;
    return rounds.map((round) => {
      const rIndex = parseInt(round.split(' ')[1], 10) -1;
      const curRound = this.props.rounds.get(rIndex);
      return sessions.filter((session) => {
        // console.log(session.get('StartRound').TimeSpan);
        return (session.get('Day').DisplayName === curRound.get('day')) &&
               (session.get('StartRound').TimeSpan.split(' - ')[0] === curRound.get('startTime') ||
                session.get('EndRound').TimeSpan.split(' - ')[1] === curRound.get('endTime'));
        // console.log(session.get('Day').DisplayName);
        // console.log(curRound.get('day'))
      })
    }).flatten(true)
      .toMap()
      .mapEntries(([k, v]) => [k = v.get('id'), v])
      .toList();
  },
  filterSessions: function(){
    const activeFilters = this.props.filter.filter((val) => {
      return (List.isList(val)) ? val.count() !== 0 : val !== false;
    });

    const favs = this.filterFavs();
    // console.log('favs --------------------------------')
    // console.log(favs.toJS());
    const levels = this.filterLevels(List(['Geek', '101', '201']));
    // console.log('101 --------------------------------')
    // console.log(levels.toJS());
    const types = this.filterType(List(['Education Breakout', 'Vendor Breakout', 'Hands-On Lab']));

    const rounds = this.filterRounds(List(['Round 1', 'Round 2']));
    // console.log(rounds);

    // if(activeFilters.count() < 1) return this.props.sessions;

    const filtered = activeFilters.map((val, key) => {
      switch(key){
        case 'favorites':
          return this.filterFavs();
        case 'level':
          return this.filterLevels(val);
        default:
          return;
      }
    });
    console.log(filtered.toJS())
    console.log(
      filtered.map((sessions) => {
        return sessions.toMap().mapEntries(([k, v]) => [k = v.get('id'), v]);
      }).toJS()
    );

    // console.log(filtered.toList().flatten(true).toJS());
    //
    // const uniqueIds = this.removeDupes(filteredSessions.map((session) => session.get('id')));
    // console.log(uniqueIds.toJS());

    return this.props.sessions;
  },
  chunkSessions: function(){
    const sessions = this.filterSessions();
    const pages = Math.ceil((sessions.count()) / 10);
    let chunks = List([]);
    // console.log(chunks);
    let i = 0;
    for(i = 0; i < pages; i++){
      chunks = chunks.push(sessions.slice((i * 10), ((i * 10) + 10)));
    }
    return chunks;
  },
  render: function(){
    this.filterSessions();
    return(
      <div className="page">
      <div className='round-list'>
        <section className='session-round'>
          <SessionListContainer sessions={this.filterSessions()} />
        </section>
      </div>
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    sessions: state.sessions,
    rounds: state.rounds,
    page: state.page,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch){
  return{
    setFavs: () => {
      dispatch(
        {
          type: 'SET_FAVS'
        }
      )
    }
  };
}

export const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);


// <RoundListContainer sessions={this.chunkSessions()[this.props.page]} />

// <Pagination chunks={this.chunkSessions()} />
// <SessionListContainer sessions={this.chunkSessions().get(this.props.page)} />
