import React, { Component,PropTypes } from 'react';
import Item from 'Item';
import Input from 'Input';
export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
    };

    static defaultProps = {
        title: "",
        items: [],
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    render() {

      const {
        title,
        items,
      } = this.props

      return (
        <div className="list">
            <h3>{title}</h3>
            <hr />
            <br />
            {
                <Input placeholder="Taper votre recherche ici" onChange={this.onChangeHandler}/>
            }
            <div className="wrapper">
                {
                  items &&
                  items.map((item, index) => {
                    return (
                        item.name
                        && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1
                        && <Item key={index} name={item.name} />
                    );
                  })
                }
            </div>
        </div>)

    }
}
