import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            Username : "",
            Password : ""
        }
    }


    onchange = (e)=>{
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        })

    }
    Login = (e)=>{
        e.preventDefault();
        var {Username,Password} = this.state
        if(this.state.Username === "" || this.state.Password === "")
        {
            alert("ban can dien day du thong tin!");
        }
        else
        {
            var Users = this.props.Users

            Users.forEach(element => {
                if(Username === element.username && Password === element.password)
                {

                    localStorage.setItem('user',JSON.stringify({
                        name : element.name,
                        username : element.username,
                        password : element.password
                    }));    
                    this.props.ChangeUserNameOnline(element.name)
                    this.props.ChangeUserIdOnline(element.id)


                    var keys = []
                    for (var j in element.cart)
                    {
                        keys.push(j)
                    }
                    
                    const token = []
                    for (var i = 0 ; i< keys.length; i++)
                    {
                        const id = element.cart[keys[i]].id
                        const count = element.cart[keys[i]].count
                        const key = keys[i]
                        token.push({key,id,count})
                    }

                    this.props.AddItemToCart(token)



                    this.props.IsLogin()

                    return true;
                }
            })

        }
    }
    
    render() {
        if(this.props.LoginStatus === true){
            return <Redirect to="/"/> 
        }
        return (
                <div className="login-box">
                <h2>Login</h2>
                <div className="text-login">
                    <i className="fa fa-user" aria-hidden="true" />
                    <input type="text" placeholder="Username" name ="Username" onChange = {(e)=>this.onchange(e)}/>
                </div>
                <div className="text-login">
                    <i className="fa fa-lock" aria-hidden="true" />
                    <input type="password" placeholder="Password" name ="Password" onChange = {(e)=>this.onchange(e)} />
                </div>

                <button className="btn_login" onClick= {(e)=>this.Login(e)} id="btn_login">Dang nhap</button>
                </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        LoginStatus: state.LoginStatus,
        Users : state.Users,
        ItemInCart : state.ItemInCart
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        IsLogin: () => {
            dispatch({type: 'IsLogin'})
        },
        ChangeUserNameOnline: (UserNameOnline) => {
            dispatch({type: 'ChangeUserNameOnline', UserNameOnline : UserNameOnline})
        },
        ChangeUserIdOnline: (UserIdOnline) => {
            dispatch({type: 'ChangeUserIdOnline', UserIdOnline : UserIdOnline})
        },
        AddItemToCart: (Item) => {
            dispatch({type : 'AddItemToCart' ,Item : Item})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)