import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product'; 

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'moto1',
        name: 'Kawasaki Z-H2',
        price: 17000,
        image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_estpyge/2019_11_14/2020kawasakizh2.jpg',
      },
      {
        id: 2,
        slug: 'moto2',
        name: 'Triumph Rocket 3',
        price: 29000,
        image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_estpyge/2019_11_14/2019TriumphRocket312.jpg',
      },
      {
        id: 3,
        slug: 'moto3',
        name: 'MV Agusta Brutale 1000 Serie Oro',
        price: 47469,
        image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_estpyge/2019_11_14/4480501_MV_Agusta_Brutale_1000_Serie_Oro.jpg',
      },
      {
        id: 4,
        slug: 'moto4',
        name: 'Triumph Daytona Moto2 765',
        price: 19300,
        image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_estpyge/2019_11_14/2019TriumphDaytonaMoto2765LimitedEdition27e1566597253223.jpg',
      }
    ]
    const { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}$ <br />
            <img src={product.image} />
          </li>
        </NavLink>
      );
    })

    var { location } = this.props;
    console.log(location);

    return (
      <div className="container">
        <h1>Danh sach sp</h1>

        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:name" component={Product}/>
        </div>
      </div>
    );
  }
}

export default Products;
