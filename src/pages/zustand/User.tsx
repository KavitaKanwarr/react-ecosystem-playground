import { useZustandStore } from "../../store/zustandStore";

const User = () => {
  console.log("User rendered"); // whencount changes but only when both are rendered simultaneously because below we subscribed to whole store not just user

  const state = useZustandStore();

  return (
    <div>
      <h1>Name: {state.user.name}</h1>
      <h3>Age: {state.user.age}</h3>
      <button onClick={state.updateName}>Update Name</button>
    </div>
  );
};

export default User;
