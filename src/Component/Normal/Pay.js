import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {DropAllCart} from '../Data/Connection'
class Pay extends Component {

    DropAllCart= ()=>{
        this.props.DropAllCart();
        DropAllCart(this.props.UserIdOnline);
        alert('thanh toán thành công !')
    }

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
        if(this.props.LoginStatus === false)
        {
            return <Redirect to = "/Home"/>
        }
        else
        {
            return (
                <div>
                    <h1 className="text-center mt-3 mb-5" style={{color: 'red'}}>Thanh Toán</h1>
                    <div style={{width : '60%', marginLeft: '20%', fontSize: '20px'}}>
                    <p style={{display: 'inline-block', fontWeight: 600}}>Địa Chỉ : </p>
                    <input type="text" className="mx-auto" style={{display: 'inline-block', width: '80%'}} />
                    </div>
                    <div className="text-center">
                        <div class='mb-2'>{'Tổng Cộng tiền : ' +  this.numbertoprice(this.props.Totalprice) + " VNĐ"}</div>
                    </div>
                    <div onClick={()=>this.DropAllCart()} className="btn btn-info text-center" style={{width : '20%', marginLeft: '40%', cursor: 'pointer'}}> Hoàn Thành</div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        LoginStatus: state.LoginStatus,
        Users : state.Users,
        Products : state.Products,
        UserIdOnline : state.UserIdOnlinem,
        Totalprice : state.Totalprice
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    DropAllCart: () => {
      dispatch({type : 'DropAllCart'})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pay)