import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import SingUp from  './SignUp'
import Product from './Product'
import Detail from './ProductDetail'
import Cart from './Cart'
import {GetData,NodeDataUser,NodeDataProduct,Sale} from '../Data/Connection'

import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Pay from './Pay'
class Index extends Component {
  constructor(props){
    super(props)

    this.state = { 
      Products : [],
      // State đùng để chứa các thông tin của tất cả sản phẩm
      ProductStyleCurrent : "Cpu",
      // State dùng để chứa số trang hiện tại của trang cả sản phẩm
      ProductPage : 1,
      CartPage : 1,
    }
  }


  ChangeProductStyleCurrent = (style) => {
    this.setState({
      ProductStyleCurrent : style,
      ProductPage : 1
    })
  }

  ChangeProductPage = (page) => {
    this.setState({
      ProductPage : page
    })
  }

  ChangeCartPage = (page) => {
    this.setState({
      CartPage : page
    })
  }

  stt = 0;
    ChangeUserNameOnline = (user) => {
    this.setState({
      UserName : user
    })
  }
  componentDidMount = ()=>{
      NodeDataUser.on('value',(user)=>{
          var UsersToken =[];
          user.forEach(item =>{
          const key = item.key;
          const user = item.val().Name;
          const username = item.val().Username;
          const pass = item.val().Password;
          const cart = item.val().Cart;

          UsersToken.push({
              id : key,
              name : user,
              username : username,
              password : pass,
              cart : cart
          });
          })

          this.props.GetUserData(UsersToken)

      })  

      NodeDataProduct.on('value',(product)=>{
          var ProductsToken =[];
          GetData(ProductsToken,product)

          this.setState({
          Products : ProductsToken
          })

          this.props.GetProductData(ProductsToken)
      }) 

      Sale.on('value',(item)=>{
          var token = []
          item.val().forEach(element => {
            const Key = element.Key
            const Value = element.Value
            
            token.push({code : Key,value : Value})
          });

      this.props.AddSaleCode(token)
      }) 
  }


    render() {
        return (
            <div>
                <Header ChangeProductStyleCurrent = {(style)=>this.ChangeProductStyleCurrent(style)}/>
                    <Switch>
                        <Route exact path = '/' component = {Home} />
                        <Route exact path = '/Home' component = {Home}/>
                        <Route exact path = '/Pay' component = {Pay}/>
                        <Route exact path = '/Login' component = {Login}/>
                        <Route exact path = '/SignUp' component = {SingUp}/>
                        <Route exact path = '/Cart' render={props => <Cart {...props} page = {this.state.CartPage} ChangeCartPage = {(page) => this.ChangeCartPage(page)}/>} />
                        <Route exact path ='/Product-Detail-:ID' component={Detail} />
                        <Route exact path="/Product" render={props => <Product {...props} Products = {this.state.Products} style = {this.state.ProductStyleCurrent} page = {this.state.ProductPage} ChangeProductPage = {(page)=>this.ChangeProductPage(page)}/>} />
                    </Switch>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        LoginStatus: state.LoginStatus,
        Users : state.Users,
        Products : state.Products,
        UserIdOnline : state.UserIdOnlinem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetUserData: (Users) => {
      dispatch({type : 'GetUserData' , Users : Users})
    },
    GetProductData: (Products) => {
      dispatch({type : 'GetProductData' ,Products : Products})
    },
    AddSaleCode: (Sale) => {
      dispatch({type : 'AddSaleCode' , Sale : Sale})
    },
    DropAllCard: () => {
      dispatch({type : 'DropAllCard'})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
