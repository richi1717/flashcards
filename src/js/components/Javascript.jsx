import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as firebase from 'firebase';
import _ from 'lodash';

class Javascript extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      show: false,
      indexOfQuestion: 0
    };
  }

  componentWillMount() {
    // let data;
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    const config = {
      authDomain: "flashcards-3d5d1.firebaseapp.com",
      databaseURL: "https://flashcards-3d5d1.firebaseio.com"
    };
    firebase.initializeApp(config);
    const dB = firebase.database();
    dB.ref('/javascript').once('value').then(snapshot => {
      // snapshot.val().map(obj => {
      this.finalDb = snapshot.val();
      this.setState({ done: true });
      // });
    });
  }

  setData() {
    const arr = [];
    const styleGreen = {
      color: '#333',
      display: this.state.show ? 'none' : null
    };
    const styleBlue = {
      color: 'green',
      maxWidth: '30rem',
      display: this.state.show ? null : 'none'
    };
    this.finalDb.map((obj, ind) => {
      const question = obj.question.split('`');
      const answer = obj.answer.split('`');
      arr.push(
        <div key={ind}>
          <div style={styleGreen}>
            {question[0]}
            <span><em>{question.length > 1 ? question[1] : null}</em></span>
            {question.length > 2 ? question[2] : null}
          </div>
          <div style={styleBlue}>
            {answer[0]}
            <span><em>{answer.length > 1 ? answer[1] : null}</em></span>
            {answer.length > 2 ? answer[2] : null}
            <span><em>{answer.length > 3 ? answer[3] : null}</em></span>
            <span><em>{answer.length > 4 ? answer[4] : null}</em></span>
            <span><em>{answer.length > 5 ? answer[4] : null}</em></span>
          </div>
        </div>
      );
    });

    this.arrLength = arr.length;
    return arr[this.state.indexOfQuestion];
  }

  render() {
    if (this.state.done) {
      return (
        <div className="main-container">
          <h1>JavaScript</h1>
          <h4>{!this.state.show ? 'QUESTION:' : 'ANSWER:'}</h4>
          {this.setData()}
          <div className="flex-container sticky-footer">
            <div className="flex-sub-container">
              <div className="btn-container">
                <button style={{width: '15rem'}} className={this.state.show ? 'btn btn-primary' : 'btn btn-success'} onClick={() => this.setState({ show: !this.state.show })}>{!this.state.show ? 'SHOW ANSWER' : 'SHOW QUESTION'}</button>
              </div>
              <div className="btn-container">
                <button style={{width: '7.2rem'}} className="btn btn-danger" onClick={() => this.setState({
                  show: false,
                  indexOfQuestion: (this.state.indexOfQuestion - 1) < 0 ? this.arrLength - 1 : --this.state.indexOfQuestion
                })}>BACK</button>
                <button style={{width: '7.2rem'}} className="btn btn-info" onClick={() => this.setState({
                  show: false,
                  indexOfQuestion: (this.state.indexOfQuestion + 1) >= this.arrLength ? 0 : ++this.state.indexOfQuestion
                })}>NEXT</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Javascript.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Javascript);
