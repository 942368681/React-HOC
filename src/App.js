import React, { Component } from 'react';
import './App.css';
import widthLoading from './components/Loading/index';

@widthLoading(state => state.s.length === 0)
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      s: []
    };
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        s: [1, 2, 3, 4]
      });
    }, 2000);
  };
  render() {
    return (
      <div className="App">
        <h3>title</h3>
      </div>
    );
  }
}

export default App;
