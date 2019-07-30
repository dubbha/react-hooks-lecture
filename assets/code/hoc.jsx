import React from 'react';

const withAnswer = Component => { // HOC
  return class extends React.Component {
    state = { answer: 42 };

    render() {
      return (
        <Component {...this.props} answer={this.state.answer} />
      );
    }
  };
};

class App extends React.Component { // component to be wrapped
  render() {
    return <div>Answer: {this.props.answer}</div>;
  }
}

export default withAnswer(App); // wrapped component export