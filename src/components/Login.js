import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    this.setState({
      [name]: target.value,
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      }))
    }
  }

  render() {

    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem('user');
    if (loggedInUser !== null) {
      var { location } = this.props;// Gửi location sang cho products tương tự như match
      return <Redirect to={{
        pathname: '/products',
        state: {
          form: location
        }
      }} /> //Redirect chức năng chính là để chuyển trang, và có thể truy xuất thông tin của trang trước bằng thuộc tính location
    }

    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onLogin}>
            <legend>Đăng Nhập</legend>

            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                name="txtUsername"
                value={txtUsername}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>PassWord</label>
              <input
                type="password"
                className="form-control"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Đăng Nhập</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
