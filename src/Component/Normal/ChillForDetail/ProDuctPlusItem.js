import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProDuctPlusItem extends Component {
    render() {
        return (
            <Link to = {'/Product-Detail-'+this.props.id} style = {{ textDecoration: 'none'}} className="col-3 item product-extra">
                <img style={{width: '90%', marginLeft: '5%', borderRadius :  '20px'}} src={this.props.image} alt="" />      
                <p className="detail-caption">
                    <strong style={{color: 'crimson'}}>{this.props.price + ' VND'}</strong> <br />
                    <p>{this.props.name}</p>
                </p>
            </Link>
        )
    }
}
