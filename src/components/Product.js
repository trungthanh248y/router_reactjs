import React, { Component } from 'react';

class Product extends Component {
  render() {

  var {match} = this.props;
  var name = match.params.name;
  console.log(this.props);

    return (
      <h1>
        Chi tiet sp {name}
      </h1>
    );
  }
}

export default Product;
