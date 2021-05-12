import React, { Component } from 'react'

export default class NodepageSwapp extends Component {
    render() {
        return (
            <li onClick={()=>this.props.ChangeProductPage(this.props.page)} className={this.props.classnode}>
                <div className="page-link"  > {this.props.page} </div>
            </li>
        )
    }
}
