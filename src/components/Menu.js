import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

const menus = [
  {
    name : 'Home',
    to : '/',
    exact: true
  },
  {
    name : 'About',
    to : '/about',
    exact: false
  },
  {
    name : 'Products',
    to : '/products',
    exact: false
  }
]

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            {/* <li className="active">
              <NavLink activeStyle={{
                backgroundColor : 'white',
                color : 'red',
              }} to="/" exact className="my-link">Home</NavLink>
            </li> */}
            {this.showMenus(menus)}
          </ul>
        </nav>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink 
          key={index}
          label={menu.name} 
          to={menu.to}
          activeOnlyWhenExact={menu.exact} 
        />
        )
      });
    }
    return result;
  }
}
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active abc' : '';
      return (
        <li className={`my-li ${active}`}>
          <Link to={to} className="my-link">
            {label}
          </Link>
        </li>
      )
    }} />
  )
}

export default Menu;
