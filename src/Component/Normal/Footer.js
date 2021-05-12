import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
        <div className="container-fluid footer-index row mx-auto">        
          <div className="col-4 footer-textbox">
            <h5>Lời Ngỏ</h5>
            <p><b>Warrior Computor </b> mong quý khách sẽ có khoảng thời gian trải nghiệm tuyệt vời và sở hữu được những thứ mà bạn mong đợi</p>
          </div>
          <div className="col-4 footer-textbox">
            <h5>Chi tiết</h5>
            <p><i className="fa fa-address-book-o" aria-hidden="true"> </i> <Link to ='/'>Chính sách thanh toán</Link></p>
            <p><i className="fa fa-location-arrow" aria-hidden="true" /><Link to ="/">Địa chỉ store</Link></p>
            <p><i className="fa fa-motorcycle" aria-hidden="true" /><Link to ="/">Miễn phí vận chuyển </Link></p>
          </div>
          <div className="col-4 footer-textbox">
            <h5>Thời gian hoạt động</h5>
            <p><i className="fa fa-clock-o" aria-hidden="true" />Thứ 2 - 6 : từ 7h -&gt; 18h</p>
            <p><i className="fa fa-clock-o" aria-hidden="true" />Thứ 7 : từ 7h -&gt; 10h</p>
            <p><i className="fa fa-clock-o" aria-hidden="true" />Chủ nhật : Nghỉ</p>
          </div>
        </div>
        )
    }
}
