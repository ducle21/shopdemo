import React, { Component } from 'react'
import load from './img/load2.png'
export default class PageLoad extends Component {
    render() {
        return (
            // style ={{ fontSize : '80px'}}
            <div className = "text-center mt-10 mb-10" >
                {/* Page Đang Load Bạn Ê */}
                <img src={load} alt='anh'/>
            </div>
        )
    }
}
