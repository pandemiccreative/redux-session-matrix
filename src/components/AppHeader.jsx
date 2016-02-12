import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

const AppHeader = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return(
      <header className="app-header">
        <h1 className="app-title">{this.props.appTitle}</h1>
      </header>
    );
  }
});

function mapStateToProps(state){
  // console.log(state.get('favSessions').map((session, i) => 'session ' + i));
  return{
    appTitle: state.get('appTitle')
  };
}

export const AppHeaderContainer = connect(mapStateToProps)(AppHeader);
