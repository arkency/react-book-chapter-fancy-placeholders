import React from 'react';

class FancyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let newText = e.target.value;
    this.setState({text: newText});
  }

  render() {
    let spanClass = (this.state.text) ? "stamp" : "placeholder";
    return (
      <div className="fancy-input">
          <input type="text" value={this.state.text} onChange={this.onChange}/>
          <span className={spanClass} >{this.props.placeholder}</span>
      </div>
    );
  }
}

export default FancyInput;
