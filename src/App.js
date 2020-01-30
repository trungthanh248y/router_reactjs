import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu />
          {/* Noi dung */}
          <Switch>{/* Switch được sử dụng tương tự như trong ngôn ngữ lập trình(Kiểu tra các link đầu vào nếu k có thì chạy vào default) */}
            {/* <Route path="/" exact component={Home}></Route> */}
            {/* exact kiểm tra chính xác dg dẫn */}
            {/* <Route path="/about" component={About}></Route> */}
            {/* <Route component={NotFound}></Route> */}
            {/* Route mặc định(Nếu không có link nào trùng khớp thì sẽ chạy vào đây) */}
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return result;
  }
}


export default App;

// !important sử dụng để ghi đè lên các class có trước trong css
