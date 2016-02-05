import React from 'react';
import AppHeader from './AppHeader';
import Page from './Page';

const App = React.createClass({
  getSessions: function(){
    return this.props.state.sessions || [];
  },
  getFavSessions: function(){
    return this.props.state.favSessions || [];
  },
  render: function(){

    return(
      <div className="container cf">
        <AppHeader appTitle={this.props.state.appTitle} />
        <div style={{height:40}}>
          <p>Currently Faved Sessions</p>
          <ul className="favedSessions">{this.getFavSessions().map(entry =>
            <li key={entry}>{entry}</li>
          )}</ul>
        </div>
        <main className="app-sessions">
          <Page state={this.props.state} />
        </main>
      </div>
    );
  }
});

export default App;
