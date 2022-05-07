import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    if (this.state.email.trim() === '' || this.state.name.trim() === '') {
      alert("All fields are mandatory");
      return;
    }
    this.props.addDetails(this.state);
    this.setState({ name: "", email: "" });
    console.log("Chal gaya")
  }
  render() {
    return (
      <div className="ui main" >
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={e => this.setState({name:e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={e => this.setState({email:e.target.value})}/>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
