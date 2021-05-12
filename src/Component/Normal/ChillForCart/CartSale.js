import React, { Component } from 'react'
import { connect } from 'react-redux';
class CartSale extends Component {
    constructor(props){
        super(props)
        this.state = {
            Sale: 0
        }
    }

    onchange = (event) =>{
        var value = event.target.value
        this.setState({
            Sale : value
        })
    }

    submit = ()=>{
        var Sale = 0
        this.props.Sale.forEach(element => {
            if(element.code === this.state.Sale){
                Sale = element.value
            }
        });

        this.props.ChangeSale(Sale)

    }
    render() {
        return (
            <div className="card border-primary mb-3 discount" style={{maxWidth: '18rem'}}>
                <div className="card-header">Ma giam gia</div>
                <div className="card-body btn-group discount_input" onChange = {(e)=>this.onchange(e)}>
                <input type="text" />    
                <button className="btn btn-secondary" onClick = {()=>this.submit()}>áp dung</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Sale : state.Sale
  }
}

export default connect(mapStateToProps)(CartSale)
