import React, { Component } from 'react'
import Top from './ChillForDetail/Top'
import Load from './PageLoad'
import DeTail from './ChillForDetail/Detail'
import { connect } from 'react-redux';
import Itemplus from './ChillForDetail/ProductPlus'
import {AlterUserCart} from '../Data/Connection'
// import {AlterUserCart} from '../Data/Connection'
class ProductDetail extends Component {

    RenderBody = ()=>{
        var id = this.props.match.params.ID;
        var style ;
        var item = {};
        this.props.Products.forEach( element=> {
            if(element.id === id)
            {
                item = element;
                style = item.style;
            }

        });


        return(
        <div>
            <Top id={this.props.match.params.ID} AlterUserCart = {(id,item)=>AlterUserCart(id,item)} image = {item.image} price = {item.price} name ={item.productname} trademark = {item.trademark}/>
            <DeTail body = {item.detail} detail ={item}/>
            <Itemplus products ={this.props.Products} id = {this.props.match.params.ID} style = {style}/>
        </div>
        )

    }
    render() {
        if(this.props.Products.length > 0)
        {
            return (<div>{this.RenderBody()}</div>)
        }
        else 
        {
            return (<Load/>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Products : state.Products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetUserData: (Users) => {
      dispatch({type : 'GetUserData' , Users : Users})
    },
    AddItemToCart : (ItemInCart) => {
        dispatch({type: 'AddItemToCart',ItemInCart: ItemInCart})
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)