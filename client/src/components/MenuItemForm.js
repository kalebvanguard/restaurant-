import React from 'react';
import { Form, } from "semantic-ui-react";



class MenuItemForm extends React.Component {
    state = { name: "", };
  
    handleChange = (e) => {
      this.setState({ name: e.target.value, });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addMenuitem(this.state.name);
      this.setState({ name: "", });
    };
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Name"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form>
      );
    };
  };
  
  export default MenuItemForm;
  