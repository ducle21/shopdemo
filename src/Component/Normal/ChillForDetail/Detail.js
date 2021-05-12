import React, { Component } from 'react'
import Chil from './DetailChil'
export default class detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            status : false
        }
    }

    showbtn = ()=>{
        if(this.state.status === true)
        {
            return(
                <button className=" btn btn-secondary btn-thugon" onClick={()=>{this.setState({status:false})}}>Thu Gọn </button>
            )
        }
        else
        {
            return(
                <button className=" btn btn-secondary btn-them" onClick={()=>{this.setState({status:true})}}>Thêm </button> 
            )
        }
    }

    RenderBody = ()=>{
        var result = []
        if(this.state.status === true && this.props.body.length > 0)
        {
            for(var i = 1 ; i<this.props.body.length ; i++)
            {
            result.push(<Chil key={i} class="item-infor-text-2" body = {this.props.body[i].BodyText} title = {this.props.body[i].TitleText} image = {this.props.body[i].Image}/>)
            }
            return  result
        }
    }

    ShowTableDetail = () =>{
        var keyNames = Object.keys(this.props.detail);
        var test = ["stt","price","id","style","productname","detail","image"]
        
        var list = keyNames.filter((item)=>{
            return(test.indexOf(item) === -1)
        }) 

        var result = []
        list.forEach((element,key) => {
            result.push(<div className="row item-thongso" key = {key}><div className="col-6">{element.toUpperCase()}</div><div className="col-6">{this.props.detail[element]}</div></div>)
        });

        return result
    }

    render() {
        return (
            <div className="container-fluid row item-thongtin">
                <div className="col-8 ">
                    <Chil class="item-infor-text" body = {this.props.body[0].BodyText} title = {this.props.body[0].TitleText} image = {this.props.body[0].Image}/>
                    {this.RenderBody()}
                    {this.showbtn()}
                </div>

                <div className="col-4 ">
                    <h4 style={{textAlign: 'center'}}>Thông số kỹ thuật</h4>
                    {this.ShowTableDetail()}
                </div>
            </div>
        )
    }
}
