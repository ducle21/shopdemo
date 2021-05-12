import React, { Component } from 'react'
export default class DetailChil extends Component {
    rendertile = ()=>{
        var result = []
        if(this.props.title !== undefined){
            if(Array.isArray(this.props.title)){
                this.props.title.forEach(element => {
                    result.push(<h4 style={{textAlign: 'center'}}>{element} </h4>)
                });
            }
            else{
                return(
                    <h4 style={{textAlign: 'center'}}>{this.props.title} </h4>
                )
            }
        }
        return(result)
    }
    renderbody = ()=>{
        var result = []
        if(this.props.body !== undefined){
            if(Array.isArray(this.props.title)){
                this.props.body.forEach(element => {
                    result.push({element})
                });
            }
            else{
                return(
                    <p className="infor-text">{this.props.body}</p>
                )
            }
        }
        return(result) 
    }
    renderimage = ()=>{
        var result = []
        if(this.props.image !== undefined){
            if(Array.isArray(this.props.title)){
                this.props.image.forEach(element => {
                    <img className="img-detail " src={element} alt="" /> 
                });
            }
            else{
                return(
                    <img className="img-detail" src={this.props.image} alt="" /> 
                )
            }
        }
        return(result)  
    }
    render() {
        return(
            <div className={this.props.class} >
                {this.rendertile()}
                {this.renderbody()}
                {this.renderimage()}                
            </div>
        )
    }
}
