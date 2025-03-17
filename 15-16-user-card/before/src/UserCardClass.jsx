import React from "react";

export class UserCardClass extends React.Component {
  render() {
    <div class="card">
      <h2 class="name">{this.props.name}</h2>
      <div class="body">
        <div class="label">Age:</div>
        <div>{this.props.age}</div>
        <div class="label">Phone:</div>
        <div>{this.props.number}</div>
        <div class="label">Address:</div>
        <div>{this.props.address}</div>
      </div>
    </div>;
  }
}
