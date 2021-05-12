import React, { Component } from 'react'
import Item from'./ProDuctPlusItem'
export default class ProductPlus extends Component {
    renderbody = ()=>{
        var result = []
        var dem = 0;
        if(this.props.products !== undefined)
        {
            this.props.products.forEach(element => {
                if(dem === 4){
                    return(result)
                }
                if(element.id !== this.props.id && this.props.style === element.style)
                {
                    dem += 1;
                    result.push(<Item key = {element.id} id = {element.id} image = {element.image} detail = {this.props.detail} name = {element.productname} price = {element.price}/>)
                }
            });
        }

        return result;
    }
    render() {
        return (
            <div className="container-fluid row item-plus">
                <p style={{color: 'brown', textAlign: 'center', fontSize: '25px'}} className="col-12">Sản phẩm liên quan</p>
                    {this.renderbody()}
            </div>
        )
    }
}
