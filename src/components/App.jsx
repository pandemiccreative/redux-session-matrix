import React from 'react';
import { AppHeaderContainer } from './AppHeader';
import { FavTrackerContainer } from './FavTracker';
import { PageContainer } from './Page';
import SessionFilter from './SessionFilter';

const App = React.createClass({
  // getSessions: function(){
  //   return this.props.state.sessions || [];
  // },
  // getFavSessions: function(){
  //   return this.props.state.favSessions || [];
  // },
  render: function(){
    return(
      <div className="container cf">
        <AppHeaderContainer />
        <FavTrackerContainer />
        <SessionFilter />
        <main className="app-sessions">
          <PageContainer />
        </main>
      </div>
    );
  }
});

export default App;
