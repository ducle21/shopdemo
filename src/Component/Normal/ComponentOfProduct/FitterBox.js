import React, { Component } from 'react'

    class Option extends Component {
    constructor(props){
        super(props);
        this.State = {
            Checked : false
        }
    }
    
    checkchange = () =>{
        this.props.ChangeProductPage(1)
        this.props.SetSortItemChecked(this.props.value)
    }
    render() {
        var check
        if(this.props.checkedlist.indexOf(this.props.value) >= 0)
        {
            check = true
        }
        else
        {
            check = false
        }
            return (
                    <div style = {{marginLeft : '10px'}}>
                        <input type="checkbox" id={ "check" + this.props.id } name={this.props.value} checked ={check} onChange={()=>this.checkchange()}/>
                        <label htmlFor={ "check" + this.props.id } >&nbsp;&nbsp;{this.props.value}</label><br />
                    </div>
            )
        }
    }


    export default class FitterBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            status : false,
            SortItemChecked : []
        }
    }

    SetSortItemChecked = (FitterOption) =>{

        var clone = []

        if(this.state.SortItemChecked.indexOf(FitterOption) >= 0)
        {
            clone = this.state.SortItemChecked
            clone = clone.filter((item) => {
                return item !== FitterOption
            })
            this.setState({
                SortItemChecked : clone
            })  
            
        }
        else
        {
            clone = this.state.SortItemChecked
            clone.push(FitterOption)
            this.setState({
                SortItemChecked : clone
            })
        }
        var i = this.props.id;

        this.props.SetSortItem(clone,i)
    }
    
    ClickShow = () =>{
        this.setState({
            status : !this.state.status
        })
    }

    renderFItterOption =()=>{
        if(this.state.status === true)
        {
            var l = this.props.fitteritem.length
            var result = []
            for(var i = 0 ; i<l ; i++)
            {
                result.push(<Option
                    ChangeProductPage = {(page)=>this.props.ChangeProductPage(page)} 
                    value = {this.props.fitteritem[i]} 
                    id = {i}
                    key = {i} 
                    checkedlist = {this.state.SortItemChecked} 
                    SetSortItemChecked = {(option)=>{this.SetSortItemChecked(option)}}/>)
            }
            
            return result
        }

    }

    render() {
        return (
                <div style={{width: '100%', backgroundColor: 'rgba(82, 68, 68, 0.2)'}} className="mt-3">

                            <button className="btn-fititer btn btn-info" style={{width : '100%'}} onClick={()=>{this.ClickShow()}}>{this.props.fittername}</button>
                            <div className="check-item">
                                {this.renderFItterOption()}
                            </div>
                </div>
        )
    }
}
