import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataViaRtk, setUser } from "../../store/reduxToolkit/userSlice";
import type { RTKDispatch, RTKState } from "../../store/reduxToolkit/rtkStore";

const RtkUser = () => {
  const dispatch = useDispatch<RTKDispatch>();
  const [userName, setUserName] = useState("");
  const name = useSelector((state: RTKState) => state.user.name);
  const pending = useSelector((state: RTKState) => state.user.pending);
  const data = useSelector((state: RTKState) => state.user.data);

  const handleUserName = () => {
    if (userName) {
      dispatch(setUser(userName));
    }
  };

  const fetchEmojis = () => {
    dispatch(fetchDataViaRtk());
  };

  return (
    <div className="my-20">
      <h2>{name}</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleUserName}>Set User</button>
      {pending ? (
        "loading..."
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10px, 1fr))",
            gap: "16px",
          }}
        >
          {Object.entries(data).map(([name, url]) => (
            <div key={name}>
              <img src={url} alt={name} width={20} height={20} />
            </div>
          ))}
        </div>
      ) : null}
      <button onClick={fetchEmojis}>Fetch Data</button>
    </div>
  );
};

export default RtkUser;
