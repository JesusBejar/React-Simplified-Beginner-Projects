import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
import { Counter } from "./Counter";

export default function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />

      <Counter />
    </div>
  );
}
