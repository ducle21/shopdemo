import React, { Component } from 'react'

export default class NodepageSwap extends Component {
    render() {
        return (
            <li onClick={()=>this.props.ChangeCartPage(this.props.page)} className={this.props.classnode}>
                <div style={{cursor : 'pointer'}} className="page-link" > {this.props.page} </div>
            </li>
        )
    }
}
