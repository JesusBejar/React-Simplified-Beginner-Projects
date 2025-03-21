export function UserCard(name, number, age, address) {
  return (
    <div class="card">
      <h2 class="name">{name}</h2>
      <div class="body">
        <div class="label">Age:</div>
        <div>{age}</div>
        <div class="label">Phone:</div>
        <div>{number}</div>
        <div class="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
}
