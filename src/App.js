import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Component/Admin/Index'
import Normal from './Component/Normal/Index'
import './App.css';
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path ='/Admin' component={Admin}/> 
          {/* khi trong url có chữ Admin sẽ đi vào component chứa các phần của trang Admin */}
          <Route path ='/' component={Normal}/>
          {/* khi trong url không có chữ Admin sẽ đi vào component chứa các phần của trang bình thường mà người dùng có thể thấy được */}
        </Switch>
      </Router>
    )
  }
}

export default App;
