import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked : false,
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked:isChecked,
    })
  }

  render() {
    var {isChecked} = this.state;
    return (
      <div>
        Home <br />
        <button type="button" className="btn btn-info" onClick={ () => this.onClick(false) }>Cho Phep</button> <br />
        <button type="button" className="btn btn-danger" onClick={ () => this.onClick(true) }>Khong Cho Phep</button> <br />
        <Prompt 
          when={isChecked}
          message={ location => (`Ban chac chan muon di den ${location.pathname}`) }
        />
      </div>
    );
  }
}

export default Home;
