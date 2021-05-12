import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Item from './ChillForCart/CartItem'
import Pay from './ChillForCart/CartPay'
import Load from './PageLoad'
import Sale from './ChillForCart/CartSale'
import Swap from './ChillForCart/NodepageSwap'
import {AlterCountUserCart,DropCart} from '../Data/Connection'
class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            CodeSale : 0
        }
    }

    ChangeSale = (item)=>{
        this.setState({
            CodeSale : item
        })
    }


    DropCart = (key,id) =>{
        DropCart(this.props.UserIdOnline,key)
        this.props.DropItemIncart(id)
    }

    pagemax = this.props.ItemInCart.length
    // ChangeCountOneProduc
    ChangeCountOneProduct = (id,count)=>{
        var dem = 0;
        var key = 0;
        var clone = this.props.ItemInCart
        for(var i = 0 ; i < clone.length ; i++)
        {
            if(clone[i].id === id)
            {
                key = clone[i].key
                clone[i].count = clone[i].count + count
                dem = clone[i].count
            }
        }
        this.props.AlterCart(clone)
        AlterCountUserCart(this.props.UserIdOnline,key,id,dem)
        
    }


    RenderPageSwap = () => {
        var PageMax = (this.pagemax-1)/4 +1
        var LisPageSwap = []
        for(var i = 1 ; i<= PageMax ; i++)
        {   
            if(this.props.page === i.toString())
            {
                
                LisPageSwap.push(<Swap  classnode = {"page-item active"} ChangeCartPage = {(page)=>this.props.ChangeCartPage(page)} page = {i} key = {i}/>)
            }
            else
            {
                LisPageSwap.push(<Swap  classnode = {"page-item "} ChangeCartPage = {(page)=>this.props.ChangeCartPage(page)} page = {i} key = {i}/>)            
            }
        }
        return LisPageSwap
    }


    RenderItemCart = () => {

        var result = []

        if(this.props.ItemInCart.length === 0)
        {
            return(<div>Gio hang trong</div>)
        }
        else
        {
            var totalprice = 0;
            var ListIdProductInCart = []

            this.props.ItemInCart.forEach(element => {
                ListIdProductInCart.push(element.id)    
            });

            this.props.Products.forEach(element => {
                var index = ListIdProductInCart.indexOf(element.id) 
                if(index > -1)
                {
                    result.push(<Item 
                        key = {element.id}
                        id = {element.id}
                        image = {element.image} 
                        name = {element.productname} 
                        total = {this.props.ItemInCart[index].count} 
                        price = {element.price}
                        ChangeCountProduct = {(count)=>this.ChangeCountOneProduct(element.id,count)}
                        DropCart = {() => this.DropCart(this.props.ItemInCart[index].key,this.props.ItemInCart[index].id)}/>)

                    totalprice += (element.price * this.props.ItemInCart[index].count)
  
                }
            });
            this.props.SetTotalPrice(totalprice)

            var resultclone =[]
            var Page = this.props.page
            for(var x = Page*4-4 ; (x < Page*4) && (x < result.length) ; x++)
            {
                resultclone.push(result[x])

            }
            return resultclone;
        }

    }

    // componentDidMount = ()=>{
    //      var Users = this.props.Users

    //         Users.forEach(element => {
    //             if(element.id === this.props.UserIdOnline)
    //             {
    //                 var keys = []
    //                 for (var j in element.cart)
    //                 {
    //                     keys.push(j)
    //                 }
                    
    //                 const token = []
    //                 for (var i = 0 ; i< keys.length; i++)
    //                 {
    //                     const id = element.cart[keys[i]].id
    //                     const count = element.cart[keys[i]].count
    //                     const key = keys[i]
    //                     token.push({key,id,count})
    //                 }

    //                 this.props.AddItemToCart(token)
    //             }

    //         })
    // }

    render() {
        if(this.props.LoginStatus === false){
            alert('bạn cần phải đăng nhập')
            return <Redirect to = "/Home"/> 
        }
        else if(this.props.Products=== undefined || this.props.Products.length === 0)
        {
            return(<Load/>)

        }
        else if (this.props.ItemInCart.length === 0 || this.props.ItemInCart === undefined)
        {
            return(<h3 className="text-center mt-3">Giỏ Hàng Trống</h3>)
        }
        else
        {
            return (
                <div className="cart-box mx-auto mt-3 row">
                    <div className="cart-form col-8">

                    {this.RenderItemCart()}

                    <nav style={{marginTop : '2%'}} aria-label="Page navigation" className="col-12">
                        <ul className="pagination justify-content-center">

                        <li className="page-item">
                            <div style = {{cursor : 'pointer'}} className="page-link" onClick = {()=>this.props.ChangeCartPage(1)} aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </div>
                        </li>

                        {this.RenderPageSwap()}

                        <li className="page-item">
                            <div style = {{cursor : 'pointer'}} className="page-link" onClick = {()=> this.props.ChangeCartPage(parseInt((this.pagemax-1)/4 +1))} aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </div>
                        </li>


                        </ul>
                    </nav>  
                    </div>
                    <div className="col-4 mt-3">
                    
                    <Sale ChangeSale = {(item)=>this.ChangeSale(item)}/>

                    <Pay Code = {this.state.CodeSale}/>

                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Products: state.Products,
        UserIdOnline : state.UserIdOnline,
        Users : state.Users,
        ItemInCart : state.ItemInCart,
        LoginStatus : state.LoginStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        SetTotalPrice : (total) => {
            dispatch({type: 'SetTotalPrice', total : total})
        },
        AlterCart : (item) => {
            dispatch({type: 'AlterCart',item : item})
        },
        AddItemToCart : (ItemInCart) => {
            dispatch({type: 'AddItemToCart',ItemInCart: ItemInCart})
        },
        DropItemIncart : (item) => {
            dispatch({type: 'DropItemIncart',item : item})
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)