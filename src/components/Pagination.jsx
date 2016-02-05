import React from 'react';

const Pagination = React.createClass({
  render: function(){
    console.log(this.props.chunks);
    return(
      <nav className="pagination">
        {this.props.chunks.map((chunk, i) => {
          return (
            <button key={i} onClick={() => this.props.chgPage(i)}>{i + 1}</button>
          );
        })}
      </nav>
    );
  }
});

export default Pagination;
