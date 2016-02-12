import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import _ from 'lodash';
import { RoundListContainer } from './RoundList';
import Pagination from './Pagination';

const Page = React.createClass({
  chunkSessions: function(){
    return _.chunk(this.props.sessions.toArray(), 10);
  },
  render: function(){
    return(
      <div className="page">
        <Pagination chunks={List(this.chunkSessions())} />
        <RoundListContainer sessions={this.chunkSessions()[this.props.page]} />
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    sessions: state.get('sessions'),
    page: state.get('page')
  };
}

export const PageContainer = connect(mapStateToProps)(Page);
