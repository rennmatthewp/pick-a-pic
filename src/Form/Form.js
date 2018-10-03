import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: ''
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.url && this.state.title) {
      this.props.addImage(this.state);
      this.setState({ url: '', title: '' });
    }
  };

  render() {
    return (
      <form id="new-image-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          name="url"
          value={this.state.url}
          placeholder="Image Url"
          onChange={this.handleInputChange}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
