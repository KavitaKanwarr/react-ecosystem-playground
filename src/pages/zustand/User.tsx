import { useZustandStore } from "../../store/zustandStore";

const User = () => {
  console.log("User rendered"); // whencount changes but only when both are rendered simultaneously because below we subscribed to whole store not just user
  //   const state = useZustandStore();

  const user = useZustandStore((state) => state.user);
  const updateName = useZustandStore((state) => state.updateName);

  return (
    <div className="bg-green-200 w-1/3 mx-auto p-4">
      <h1>Name: {user.name}</h1>
      <h3>Age: {user.age}</h3>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};

export default User;
