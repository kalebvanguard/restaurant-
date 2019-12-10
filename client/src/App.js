import React from 'react';
import axios from "axios";
import MenuItemList from "./components/MenuItemList";
import MenuItemForm from "./components/MenuItemForm";
import { Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { menuitems: [], };

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ menuitems: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addMenuitem = (name) => {
    axios.post("/api/items", { name, })
      .then( res => {
        this.setState({ menuitems: [...this.state.menuitems, res.data], });
      })
  };

  updateMenuitem = (id) => {
    axios.put(`/api/items/${id}`)
      .then( res => {
        const menuitems = this.state.menuitems.map( menuitem => {
          if (menuitem.id === id)
            return res.data;
          return menuitem;
        });
        this.setState({ menuitems, });
      })
  };

  deleteMenuitem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        this.setState({ menuitems: this.state.menuitems.filter( t => t.id !== id ) })
      })
  };

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>Menu List</h1>
        <MenuItemForm addMenuitem={this.addMenuitem} />
        <br />
        <br />
        <MenuItemList 
          menuitems={this.state.menuitems} 
          deleteMenuitem={this.deleteMenuitem} 
          updateMenuitem={this.updateMenuitem}
        />
      </Container>
    );
  };
};

export default App;
