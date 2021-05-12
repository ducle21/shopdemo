import React, { Component } from 'react'
import { connect } from 'react-redux';
import {NodeDataUser} from '../Data/Connection'
class SigUp extends Component {
    constructor(props){
        super(props);
        this.state ={
            Name : "",
            Username : "",
            Password : "",
            Repassword : ""
        }
    }

    Submit = () =>{
        const Name = this.state.Name
        const Username = this.state.Username
        const Password = this.state.Password

        if(Name === "" || Username === "" || Password === "")
        {
            alert("chua dien dau du thong tin")
        }
        else
        {
            NodeDataUser.push({
                Name,
                Username,
                Password
            })
        }
        
    }

    Change = (event) =>{
        var name = event.target.name;
        var value = event.target.value; 
        
        console.log(name)
        console.log(value)
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
                <div className="login-box">
                    <h2>Đăng ký</h2>
                    <div className="text-login">
                        <i className="fa fa-user" aria-hidden="true" />
                        <input name = "Name" type="text" placeholder="Name" onChange = {(e)=>this.Change(e)}/>
                    </div>
                    <div className="text-login">
                        <i className="fa fa-user" aria-hidden="true" />
                        <input name = "Username" type="text" placeholder="Username" onChange = {(e)=>this.Change(e)}/>
                    </div>
                    <div className="text-login">
                        <i className="fa fa-lock" aria-hidden="true" />
                        <input name = "Password"type="password" placeholder="Password" onChange = {(e)=>this.Change(e)}/>
                    </div>
                    <div className="text-login">
                        <i className="fa fa-lock" aria-hidden="true" />
                        <input type="password" placeholder="Repassword" name = "Repassword" onChange = {(e)=>this.Change(e)}/>
                    </div>
                    {/* <div className="text-login">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <input type="text" placeholder="Mail" />
                    </div> */}
                        <button className="btn_login" onClick = {()=>{this.Submit()}}>đăng ký</button>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        test: (User) => {
            dispatch({type : 'AddNewUsert',NewUser : User})
        }
    }
}

export default connect(mapDispatchToProps)(SigUp)