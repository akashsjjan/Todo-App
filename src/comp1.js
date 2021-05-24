import React, { Component } from "react";
import Comp2 from "./comp2";

export class comp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        comp: false
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        comp: false
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const Items = [...this.state.items, newItem];
      this.setState(
        {
          items: Items,
          currentItem: {
            text: "",
            key: "",
            comp: false
          },
        },
        () => {
          console.log(Items);
        }
      );
    }
  }

  checkBoxChange(key) {
    this.setState(prevState =>{
      const updatedItems = prevState.items.map(item => {
        if (item.key === key) {
          return {
            ...item,
            comp: !item.comp
          }
        }
        return item
      })
      return {
        items: updatedItems
      }
    })
  }
 
  deleteItem(key) {
    const filterItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items: filterItems
      })
  }

  render() {
    return (
      <div className="container">
        <div className="head text-center">
          <form id="to-do-form" onSubmit={this.addItem}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter the Task"
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              />
              <div className="input-group-btn">
                <button className="btn btn-info" type="submit"> Add </button>
              </div>
            </div>


          </form>
        </div>
        <Comp2 items={this.state.items} checkBoxChange={this.checkBoxChange} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default comp1;
