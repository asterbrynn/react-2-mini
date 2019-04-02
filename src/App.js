import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor () {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    }
  }
  // updateColor
  updateColor = newColor => {
    this.setState({fontColor: newColor})
  }

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          <ColorChanger updateColor={this.updateColor} color={this.state.fontColor}/>
          {/* Render SizeChanger */}
          {/* Render FamilyChanger */}
        </div>
        <div className="textArea"><TextContainer color={this.state.fontColor}/></div>
      </div>
    );
  }
}

export default App;
