import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductItem extends Component {
    numbertoprice = (number) =>{
        var num = number.toString()
        var result = ''
        var count = 0;
        for ( var  i = (num.length - 1) ; i >= 0 ;  i--)
        {
            
            if(count % 3 === 0 && count !== 0)
            {
                count = 0;
                result = ',' + result 

            }

            result = num[i] + result
            count++


        }
        
        return result
    }
    render() {
        return (
                    // <div className="col-sm-3 item">
                    <Link to={'/Product-Detail-'+this.props.id} className="col-sm-3 item" style = {{textDecoration : 'none'}}>
                        <img src={this.props.image} alt="logo" />
                        <div className="img-title">
                            <p className="item-name">{this.props.name}</p>
                            <p className="item-monney">{this.numbertoprice(this.props.price) + ' VNĐ'}</p>
                        </div>                    
                    </Link>
        )
    }
}
