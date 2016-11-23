import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';



import '../../sass/style.scss';

class Arrangement extends Component {
  render() {
    return (
      <div className=""></div>
    );
  }
}


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrangement);
