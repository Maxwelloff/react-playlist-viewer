import React, { Component,PropTypes } from 'react';

export default class Item extends Component {
    propTypes:{
        name:PropTypes.string
    };
    render() {
        return (
            <a className="ripplelink lightgreen">
                {this.props.name}
            </a>
        );
    }
}
