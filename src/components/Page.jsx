import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import _ from 'lodash';
import { RoundListContainer } from './RoundList';
import { SessionListContainer } from './SessionList';
import Pagination from './Pagination';

const Page = React.createClass({
  chunkSessions: function(){
    return _.chunk(this.props.sessions.toArray(), 10);
  },
  render: function(){
    return(
      <div className="page">
        <Pagination chunks={List(this.chunkSessions())} />
        <SessionListContainer />
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    sessions: state.sessions,
    page: state.page
  };
}

export const PageContainer = connect(mapStateToProps)(Page);


//<RoundListContainer sessions={this.chunkSessions()[this.props.page]} />
