import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Top extends Component {

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

    AddCart = ()=>{
            this.props.AlterUserCart(this.props.UserIdOnline , {id : this.props.id , count : 1} )
            this.props.AlterCart({id : this.props.id , count : 1})
    }
    render() {
        return (
            <section>
                <div className="container-fluid row">
                <div className="col-2 image-product " style={{backgroundColor: 'rgba(25, 159, 212, 0.6)'}}>
                    <img src={this.props.image} alt = ''/>
                </div>
                <div className="col-10 detail">
                    <p className="detail-text">{this.props.name}</p>
                    <p>
                    <strong className="monney-text"><i className="fa fa-money" aria-hidden="true"></i> { "Giá : " + this.numbertoprice(this.props.price) + " VNĐ"}</strong>  <br />
                    <i className="fa fa-trademark" aria-hidden="true"></i> {"Thương Hiệu : "+ this.props.trademark} 
                    </p>
                    <div className="btn-group">
                    <Link to ='/Cart' type="button" className="btn btn-primary">Mua hàng</Link>
                    <button type="button" className="btn-outline-danger" onClick = {()=>this.AddCart()}>Thêm Giỏ Hàng</button>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AlterCart : (item) => {
            dispatch({type: 'AlterCart',item : item})
        },
    }
}
// AlterUserCart(this.props.UserIdOnline ,)
const mapStateToProps = (state, ownProps) => {
    return {
        Users : state.Users,
        UserIdOnline : state.UserIdOnline
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Top)

