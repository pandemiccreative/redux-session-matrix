import React from 'react';
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

const AppHeader = React.createClass({
  // mixins: [PureRenderMixin],
  render: function(){
    // console.log("TEST")
    // console.log(store);
    return(
      <header className="app-header">
        <h1 className="app-title">{this.props.appTitle}</h1>
      </header>
    );
  }
});

function mapStateToProps(state){
  return{
    appTitle: state.appTitle
  };
}

export const AppHeaderContainer = connect(mapStateToProps)(AppHeader);
