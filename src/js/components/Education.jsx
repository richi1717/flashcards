import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

class Education extends Component {
  render() {
    return (
      <div className="">
        <div className=""></div>
      </div>
    )
  }
}

Education.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
