import { useState } from "react";
import styles from "./user.css";
import json from "./user.json";
import { UserCard } from "./Usercard";
import { UserCardClass } from "./UserCardClass";

export default function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        number={user.number}
        age={user.age}
        address={user.address}
      />

      <h1></h1>

      <UserCardClass>
        name={user.name}
        number={user.number}
        age={user.age}
        address={user.address}
      </UserCardClass>
    </div>
  );
}
