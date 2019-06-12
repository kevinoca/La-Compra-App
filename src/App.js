import React from 'react';
import List from "./components/dataStore.json"
import Item from "./components/itemList"

const order = (a, b) => {

  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;

}

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: List.sort(order),
      deletedItems: []
    }

  }

  deleteItem = item => {

    const oldArray = [...this.state.items]
    const deletedItem = oldArray.splice(item, 1)

    this.setState({
      items: oldArray,
      deletedItems: deletedItem
    })

  }

  showRollingBackItemAlert = item => {

    const items = this.state.items.concat(item)

    this.setState({
      items: items.sort(order),
      deletedItems: []
    })

  }

  render() {

    const { items, deletedItems } = this.state

    return (

      <div className="App">

        <div className="items-holder">

          {deletedItems.length > 0 &&

            <div className="deleted-items">
              {deletedItems.map((item, key) => <Item {...item} key={key} onSelect={() => this.showRollingBackItemAlert(item)} />)}
            </div>

          }

          <ul>

            <div className="list-items">
              {items.map((item, key) => <Item {...item} key={key} onSelect={() => this.deleteItem(key)} />)}
            </div>

          </ul>

        </div>

      </div>

    )

  }

}

export default Main;
