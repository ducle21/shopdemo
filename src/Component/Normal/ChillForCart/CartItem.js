import React, { Component } from 'react'
export default class CartItem extends Component {

    ChangeCountProduct = (count) => {
        this.props.ChangeCountProduct(count)
    }

    RenderNumCount = ()=>{
        if(this.props.total === 1)
        {
            return(
                    <div className="col-2 text-center control-number-item">
                        <i onClick = {()=>this.props.DropCart()} className="fa fa-trash" style={{cursor: 'pointer', display : 'inline-block'}} aria-hidden="true" />
   
                        <p style={{display : 'inline-block', margin : '10px', fontWeight: 1000}}>{this.props.total}</p>
                        
                        <i onClick = {()=>this.ChangeCountProduct(1)} className="fa fa-caret-up" style={{cursor: 'pointer', display : 'inline-block'}} aria-hidden="true" />

                    </div>
            )   
        }
        else
        {
            return(
                    <div className="col-2 text-center control-number-item">
                        <i onClick = {()=>this.ChangeCountProduct(-1)} className="fa fa-caret-down" style={{cursor: 'pointer', display : 'inline-block'}} aria-hidden="true" />
                        
                        <p style={{display : 'inline-block', margin : '10px', fontWeight: 1000}}>{this.props.total}</p>
                        
                        <i onClick = {()=>this.ChangeCountProduct(1)} className="fa fa-caret-up" style={{cursor: 'pointer', display : 'inline-block'}} aria-hidden="true" />
                    </div>    
            )
        }
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
        return (
                <div className="item-cart mt-3 row">
                    <div className="col-6  row">
                        <div className="item-cart-image col-3">
                            <img style={{display : 'inline-block'}} src={this.props.image} alt="" />
                        </div>
                        <div className=" item-cart-name col-9">
                            <p style={{display : 'inline-block'}}> {this.props.name}</p>
                        </div>
                    </div>

                    {this.RenderNumCount()}

                    <div className="col-4 text-center" style={{lineHeight: '100px'}}>
                        <p style={{fontWeight: 700, fontSize : '20px', margin : '10px', color : 'crimson'}}> 
                            {this.numbertoprice(this.props.total * this.props.price) + ' VNĐ'}
                        </p>
                    </div>
                </div>
        )
    }
}

