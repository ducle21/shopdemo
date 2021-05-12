import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {

    LogOut = ()=>{
        this.props.UserIdOnline("")
        this.props.ChangeUserNameOnline("")
        this.props.IsLogin(false)
    }

    ShoUserControl = ()=>{
        if(this.props.UserNameOnline === "")
        {
            return (
                <div className="infor-user">
                    <p ><i className="fa fa-user" aria-hidden="true" /><Link to="/Login" > Đăng nhập</Link> | <Link to="/SignUp">Đăng ký</Link></p>
                    {/* redirect sang trang đăng nhập hoặc đăng ký theo nhu cầu của người dùng khi người dùng chưa đăng nhập */}
                </div> 
            )
        }
        else
        {
            var text = "xin chao " + this.props.UserNameOnline
            return (
                <div className="infor-user">
                    <p><Link to="/Home" ><i className="fa fa-user" aria-hidden="true" /> {text}  </Link> | <Link to ="/Home" onClick = {()=>this.LogOut()}>đăng xuất</Link></p> 
                    {/* redirect sang trang chi tiết thông tin hiện tại của người dùng hoặc đăng xuất khi người dùng đã đăng nhập thành công */}
                </div> 
            )
        }
    }
    render() {
        return (
            <div>
                <header>
                <div className="list-icon">
                    {/* redirect sang các mạng xã hội liên kết của cửa hàng */}
                    <Link to = '/'><i className="icon-top fa fa-facebook-square" aria-hidden="true" /></Link>
                    <Link to = '/'><i className="icon-top fa fa-twitter" aria-hidden="true" /></Link>
                    <Link to = '/'><i className="icon-top fa fa-google-plus-square" aria-hidden="true" /></Link>
                    {/*  */}
                </div>

                {this.ShoUserControl()}

                <div className="text-box-header">
                    <h3 className="text-box">Warrior Computer</h3>
                    <p>Lựa Chọn Số 1 Của Game Thủ</p>
                </div>
                </header>

                {/* phần điều hướng của trang */}
                <nav className="navbar navbar-expand-sm navbar-light bg-light">       
                    <p className="navbar-brand" >Warrior Computer</p>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active" >
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Cart">Giỏ Hàng <i className="fa fa-cart-plus" aria-hidden="true" /></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" style = {{cursor : 'pointer'}} id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danh sách sản phẩm</div>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item text-center" to = "/Product" onClick = {()=>this.props.ChangeProductStyleCurrent("Cpu")}>Cpu</Link>
                                <Link className="dropdown-item text-center" to = "/Product" onClick = {()=>this.props.ChangeProductStyleCurrent("Gpu")}>Gpu</Link>
                                <Link className="dropdown-item text-center" to = "/Product" onClick = {()=>this.props.ChangeProductStyleCurrent("Ram")}>Ram</Link>
                                <Link className="dropdown-item text-center" to = "/Product" onClick = {()=>this.props.ChangeProductStyleCurrent("MainBoard")}>MainBoard</Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>                
                {/* kết khúc phần điều hướng của trang */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        UserNameOnline: state.UserNameOnline
        // lấy tên use đang đăng nhập khi người dùng đăng nhập thành công bằng component đăng nhập thông qua redux
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ChangeUserNameOnline: (UserNameOnline) => {
            dispatch({type : 'ChangeUserNameOnline',UserNameOnline : UserNameOnline })
        },
        UserIdOnline: (UserIdOnline) => {
            dispatch({type : 'ChangeUserIdOnline',UserIdOnline : UserIdOnline })
        },
        IsLogin : (status) => {
            dispatch({type: 'IsLogin', status : status})
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)