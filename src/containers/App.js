import React, { Component } from "react";
import HeaderComponent from "components/Header";
import Form from "components/Form";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [],
      isLoading: true,
      query: 0,
      users: []
    };
  }
  componentDidMount() {
    // const url = process.env.REACT_APP_POE;

    axios.get("/").then(data => console.log(data));
  }

  onFormSubmit = e => {
    e.preventDefault();
    let inputSubmitted = e.target.elements.input_number.value;

    this.setState({ query: inputSubmitted });

    if (inputSubmitted !== 0 || inputSubmitted !== "") {
      e.target.elements.input_number.value = "";
    }
  };

  render() {
    console.log(this.state.users);
    return (
      <div>
        <HeaderComponent />
        <Form onSubmit={this.onFormSubmit} />
        {this.state.users.map(theusers => (
          <li key={theusers.id}>{theusers.username}</li>
        ))}
      </div>
    );
  }
}

export default App;
