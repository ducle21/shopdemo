import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Load from '../PageLoad'
class CartPay extends Component {

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
        if(this.props.Totalprice === undefined)
        {
            return(<Load/>)
        }
        else{
            return (
                <div className="row">
                    <h3 className="col-12">Tong tien</h3>
                    <p className="col-6">gia goc :</p>
                    <p className="col-6">{this.numbertoprice(this.props.Totalprice*(1-this.props.Code)) + ' VNĐ'}</p>
                    <p className="col-6">Khuyen mai :</p>
                    <p className="col-6">{(this.props.Code*100) + ' %'}</p>
                    <p className="col-6">thanh tien :</p>
                    <p className="col-6">{this.numbertoprice(this.props.Totalprice*(1-this.props.Code)) + ' VNĐ' }</p>
                    <Link to = '/Pay' className="btn btn-info col-12">Thanh toan</Link>
                </div>
            )
        }

    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        Totalprice: state.Totalprice
    }
}
export default connect(mapStateToProps)(CartPay)
