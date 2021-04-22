import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }
  decrCount = () => this.setState({ count: (this.state.count === 0) ? 0 : (this.state.count - 1)});
  incrCount = () => this.setState({ count: this.state.count + 1});
  render() {
    return (
      <div className="App">
        <div className="blood-container" style={{height: this.state.count * 15 * window.innerHeight/100}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dc143c" d="M0,224L20,229.3C40,235,80,245,120,250.7C160,256,200,256,240,224C280,192,320,128,360,138.7C400,149,440,235,480,245.3C520,256,560,192,600,144C640,96,680,64,720,90.7C760,117,800,203,840,229.3C880,256,920,224,960,224C1000,224,1040,256,1080,261.3C1120,267,1160,245,1200,229.3C1240,213,1280,203,1320,202.7C1360,203,1400,213,1420,218.7L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>
        <h1>Count, Dr. Acula!</h1>
        <div>
          <h2>
            You have {this.state.count === 0 ? 'no' : this.state.count} blood bag{this.state.count === 1 ? null : 's'}.
          </h2>
          <div className="buttons">
            <button type="button" onClick={this.decrCount}>-</button>
            <button type="button" onClick={this.incrCount}>+</button>
            <button type="button" onClick={() => this.setState({count: 0})}>Clear</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
