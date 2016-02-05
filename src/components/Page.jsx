import React from 'react';
import { List } from 'immutable';
import _ from 'lodash';
import RoundList from './RoundList';
import Pagination from './Pagination';

const Page = React.createClass({
  chunkSessions: function(){
    return _.chunk(this.props.state.sessions, 10);
  },
  render: function(){
    return(
      <div className="page">
        <Pagination chunks={List(this.chunkSessions())} />
        <RoundList rounds={this.props.state.rounds} sessions={this.chunkSessions()[this.props.state.page]} />
      </div>
    );
  }
});

export default Page;
